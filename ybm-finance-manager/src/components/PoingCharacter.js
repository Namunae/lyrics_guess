import React from 'react';
import { Box, Typography } from '@mui/material';

// 포잉이 캐릭터 컴포넌트 (고도화된 반응형)
const PoingCharacter = ({ 
  size = 60, 
  style = {}, 
  pregnancyWeek = 24, 
  mood = 'happy',
  expression = 'normal',
  isAnimated = true,
  showSpeechBubble = false,
  speechText = ''
}) => {
  const getCharacterState = () => {
    if (pregnancyWeek <= 12) return 'seed';
    if (pregnancyWeek <= 24) return 'sprout';
    if (pregnancyWeek <= 36) return 'flower';
    return 'full';
  };

  const characterState = getCharacterState();
  
  const moodEmoji = {
    happy: '😊',
    excited: '🤗',
    thoughtful: '🧐',
    caring: '🥰',
    surprised: '😲',
    proud: '😌',
    curious: '🤔'
  };

  const expressionEmoji = {
    normal: '🌱',
    thinking: '🤔',
    celebrating: '🎉',
    helping: '💡',
    warning: '⚠️',
    success: '✅'
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      {/* 말풍선 */}
      {showSpeechBubble && speechText && (
        <Box
          sx={{
            position: 'absolute',
            top: -size * 0.8,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
            borderRadius: 3,
            padding: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '2px solid #e8f5e8',
            maxWidth: size * 3,
            zIndex: 10,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #e8f5e8',
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ fontSize: size * 0.2 }}>{expressionEmoji[expression]}</Box>
            <Typography variant="body2" sx={{ color: '#2e7d32', fontWeight: 500 }}>
              {speechText}
            </Typography>
          </Box>
        </Box>
      )}

      {/* 기분 이모지 */}
      <Box
        sx={{
          position: 'absolute',
          top: -size * 0.4,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: size * 0.3,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          zIndex: 5,
          animation: isAnimated ? 'poingBounce 2s ease-in-out infinite' : 'none'
        }}
      >
        {moodEmoji[mood]}
      </Box>

      {/* 메인 캐릭터 */}
      <Box
        className={isAnimated ? "poing-character" : ""}
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(129, 199, 132, 0.3)',
          transition: 'all 0.3s ease',
          ...style
        }}
      >
        {/* 캐릭터 상태에 따른 모양 변화 */}
        {characterState === 'seed' && (
          <Box
            sx={{
              width: size * 0.3,
              height: size * 0.3,
              background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
              borderRadius: '50%',
              position: 'relative',
              animation: isAnimated ? 'seedGrow 3s ease-in-out infinite' : 'none'
            }}
          />
        )}
        
        {characterState === 'sprout' && (
          <Box
            sx={{
              width: size * 0.4,
              height: size * 0.6,
              background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'relative',
              animation: isAnimated ? 'sproutGrow 3s ease-in-out infinite' : 'none',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -size * 0.1,
                left: '50%',
                transform: 'translateX(-50%)',
                width: size * 0.2,
                height: size * 0.2,
                background: '#4caf50',
                borderRadius: '50%',
              }
            }}
          />
        )}

        {characterState === 'flower' && (
          <Box
            sx={{
              width: size * 0.5,
              height: size * 0.7,
              background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'relative',
              animation: isAnimated ? 'flowerBloom 3s ease-in-out infinite' : 'none',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -size * 0.15,
                left: '50%',
                transform: 'translateX(-50%)',
                width: size * 0.3,
                height: size * 0.3,
                background: '#ffb3d9',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255, 179, 217, 0.5)',
                animation: isAnimated ? 'petalGlow 2s ease-in-out infinite' : 'none'
              }
            }}
          />
        )}

        {characterState === 'full' && (
          <Box
            sx={{
              width: size * 0.6,
              height: size * 0.8,
              background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'relative',
              animation: isAnimated ? 'fullBloom 3s ease-in-out infinite' : 'none',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -size * 0.2,
                left: '50%',
                transform: 'translateX(-50%)',
                width: size * 0.4,
                height: size * 0.4,
                background: '#ffb3d9',
                borderRadius: '50%',
                boxShadow: '0 0 15px rgba(255, 179, 217, 0.6)',
                animation: isAnimated ? 'fullPetalGlow 2s ease-in-out infinite' : 'none'
              }
            }}
          />
        )}

        {/* 눈 */}
        <Box
          sx={{
            position: 'absolute',
            top: size * 0.25,
            left: size * 0.3,
            width: size * 0.08,
            height: size * 0.08,
            background: '#fff',
            borderRadius: '50%',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '50%',
              height: '50%',
              background: '#333',
              borderRadius: '50%',
            }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: size * 0.25,
            right: size * 0.3,
            width: size * 0.08,
            height: size * 0.08,
            background: '#fff',
            borderRadius: '50%',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '50%',
              height: '50%',
              background: '#333',
              borderRadius: '50%',
            }
          }}
        />
        
        {/* 입 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: size * 0.2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: size * 0.15,
            height: size * 0.08,
            border: '2px solid #fff',
            borderTop: 'none',
            borderRadius: '0 0 50% 50%',
          }}
        />
      </Box>
    </Box>
  );
};

export default PoingCharacter; 