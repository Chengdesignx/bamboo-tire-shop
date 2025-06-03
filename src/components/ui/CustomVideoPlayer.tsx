'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function CustomVideoPlayer({ src, poster, className = '' }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsReady(true);
    };
    const handleError = () => setHasError(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Reset state when src changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setIsLoading(false);
    setHasError(false);
    setIsReady(false);
  }, [src]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || !isReady) return;

    try {
      if (isPlaying) {
        video.pause();
      } else {
        await video.play();
      }
    } catch (error) {
      console.error('Video play error:', error);
      setHasError(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * duration;
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (hasError) {
    return (
      <div className={`relative bg-gray-900 rounded-2xl overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <RotateCcw className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Unable to load video</p>
            <p className="text-sm opacity-75">Please try again later</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative bg-black rounded-2xl overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        muted={isMuted}
        loop={false}
        onClick={togglePlay}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Loading Spinner - Only show when not ready */}
      <AnimatePresence>
        {!isReady && !hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play Button Overlay */}
      <AnimatePresence>
        {!isPlaying && isReady && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-4 sm:p-6 hover:bg-white/30 hover:scale-110 transition-all duration-300 min-w-[64px] min-h-[64px] sm:min-w-[80px] sm:min-h-[80px] flex items-center justify-center active:scale-90"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-0.5 sm:ml-1" fill="currentColor" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Controls */}
      <AnimatePresence>
        {showControls && isReady && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-6"
          >
            {/* Progress Bar - Enhanced for Mobile */}
            <div
              className="w-full h-3 sm:h-2 bg-white/20 rounded-full mb-3 sm:mb-4 cursor-pointer group/progress touch-manipulation"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-150 group-hover/progress:h-4 sm:group-hover/progress:h-3"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            {/* Control Buttons - Enhanced for Mobile */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-orange-400 transition-colors duration-200 p-2 rounded-lg active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-orange-400 transition-colors duration-200 p-2 rounded-lg active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>

                <span className="text-white text-xs sm:text-sm font-medium hidden xs:block">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-orange-400 transition-colors duration-200 p-2 rounded-lg active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Maximize className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
