import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Slider,
  Button,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
  LinearProgress
} from '@mui/material';
import {
  PregnantWoman as PregnantWomanIcon,
  AttachMoney as MoneyIcon,
  FamilyRestroom as FamilyIcon,
  TrendingUp as TrendingUpIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import PoingCharacter from './PoingCharacter';

const ExpensePlanningTab = () => {
  const [pregnancyWeek, setPregnancyWeek] = useState(24);
  const [incomeLevel, setIncomeLevel] = useState('middle');
  const [poingMood, setPoingMood] = useState('happy');
  const [poingExpression, setPoingExpression] = useState('normal');
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechText, setSpeechText] = useState('');

  const handlePregnancyWeekChange = (event, newValue) => {
    setPregnancyWeek(newValue);
    
    // 임신 주수에 따른 포잉이 반응
    if (newValue <= 12) {
      setPoingMood('thoughtful');
      setPoingExpression('thinking');
      setSpeechText('아직 작은 씨앗이에요! 차근차근 준비해봐요 🌱');
    } else if (newValue <= 24) {
      setPoingMood('happy');
      setPoingExpression('normal');
      setSpeechText('새싹이 자라고 있어요! 포잉이가 도와드릴게요 🌿');
    } else if (newValue <= 36) {
      setPoingMood('excited');
      setPoingExpression('celebrating');
      setSpeechText('꽃이 피어나고 있어요! 곧 만나요 🌸');
    } else {
      setPoingMood('caring');
      setPoingExpression('success');
      setSpeechText('곧 만나요! 포잉이가 응원할게요 💕');
    }
    
    setShowSpeechBubble(true);
    setTimeout(() => setShowSpeechBubble(false), 3000);
  };

  const handleIncomeLevelChange = (level) => {
    setIncomeLevel(level);
    setPoingExpression('helping');
    setSpeechText('소득 분위에 맞는 맞춤 정보를 제공해드릴게요! 💡');
    setShowSpeechBubble(true);
    setTimeout(() => setShowSpeechBubble(false), 3000);
  };

  // 월별 지출 데이터
  const monthlyExpenses = [30, 45, 60, 80, 70, 65, 55, 50, 45, 40, 35, 30];
  const totalExpense = monthlyExpenses.reduce((sum, expense) => sum + expense, 0) * 10;

  // 지출 구성
  const expenseBreakdown = [
    { category: '조리원비', percentage: 40, color: '#ffb3d9', icon: '🏥' },
    { category: '육아용품', percentage: 30, color: '#b3d9ff', icon: '🧸' },
    { category: '의료비', percentage: 20, color: '#d9ffb3', icon: '💊' },
    { category: '기타', percentage: 10, color: '#ffd9b3', icon: '📦' }
  ];

  // 유사 가족 데이터
  const similarFamilies = [
    {
      name: '김씨 가족',
      location: '서울 강남구',
      income: '중위소득 80%',
      expense: '월 평균 85만원',
      comment: '조리원비가 가장 큰 부담이었어요',
      avatar: '😊',
      color: '#ffb3d9',
      rating: 4.5
    },
    {
      name: '이씨 가족',
      location: '부산 해운대구',
      income: '중위소득 90%',
      expense: '월 평균 72만원',
      comment: '지방이라 조금 덜 부담스러웠어요',
      avatar: '🧐',
      color: '#b3d9ff',
      rating: 4.2
    },
    {
      name: '박씨 가족',
      location: '대구 수성구',
      income: '중위소득 70%',
      expense: '월 평균 68만원',
      comment: '용품은 중고로 많이 구했어요',
      avatar: '🥰',
      color: '#d9ffb3',
      rating: 4.8
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* 헤더 섹션 */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <PoingCharacter 
          size={120} 
          style={{ margin: '0 auto 20px' }} 
          pregnancyWeek={pregnancyWeek}
          mood={poingMood}
          expression={poingExpression}
          showSpeechBubble={showSpeechBubble}
          speechText={speechText}
        />
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#2e7d32', 
            mb: 1, 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          📊 지출 계획
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', fontWeight: 300 }}>
          포잉이와 함께 스마트한 육아 비용 계획을 세워보세요!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* 출산·육아비용 시뮬레이터 */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #f8fff8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8',
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PregnantWomanIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                💰 출산·육아비용 시뮬레이터
              </Typography>
            </Box>

            {/* 임신 주수 슬라이더 */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#2e7d32', fontWeight: 500 }}>
                  🤰 임신 주수
                </Typography>
                <Chip 
                  label={`${pregnancyWeek}주차`} 
                  sx={{ 
                    bgcolor: '#e8f5e8', 
                    color: '#2e7d32',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }} 
                />
              </Box>
              <Slider
                value={pregnancyWeek}
                onChange={handlePregnancyWeekChange}
                min={1}
                max={40}
                step={1}
                sx={{
                  '& .MuiSlider-track': {
                    background: 'linear-gradient(90deg, #4caf50 0%, #81c784 100%)',
                    height: 8,
                    borderRadius: 4,
                  },
                  '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    background: '#4caf50',
                    boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(76, 175, 80, 0.4)',
                    }
                  },
                  '& .MuiSlider-rail': {
                    height: 8,
                    borderRadius: 4,
                    bgcolor: '#e0e0e0'
                  }
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>1주차</Typography>
                <Typography variant="caption" sx={{ color: '#666' }}>40주차</Typography>
              </Box>
            </Box>

            {/* 소득 분위 선택 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ color: '#2e7d32', fontWeight: 500, mb: 2 }}>
                💵 소득 분위
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {[
                  { value: 'low', label: '저소득', color: '#ffcdd2', desc: '중위소득 50% 이하' },
                  { value: 'middle', label: '중위소득', color: '#c8e6c9', desc: '중위소득 50-150%' },
                  { value: 'high', label: '고소득', color: '#dcedc8', desc: '중위소득 150% 이상' }
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={incomeLevel === option.value ? 'contained' : 'outlined'}
                    onClick={() => handleIncomeLevelChange(option.value)}
                    sx={{
                      bgcolor: incomeLevel === option.value ? option.color : 'transparent',
                      borderColor: option.color,
                      color: incomeLevel === option.value ? '#2e7d32' : option.color,
                      '&:hover': {
                        bgcolor: `${option.color}20`,
                      },
                      minWidth: 'auto',
                      px: 2,
                      py: 1
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {option.label}
                      </Typography>
                      <Typography variant="caption" sx={{ display: 'block' }}>
                        {option.desc}
                      </Typography>
                    </Box>
                  </Button>
                ))}
              </Box>
            </Box>

            {/* 포잉이 반응 */}
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <PoingCharacter 
                size={80} 
                pregnancyWeek={pregnancyWeek} 
                mood={poingMood}
                expression={poingExpression}
                showSpeechBubble={showSpeechBubble}
                speechText={speechText}
              />
            </Box>
          </Paper>
        </Grid>

        {/* 월별 예상 지출 */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #f8fff8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8',
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <MoneyIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                📈 월별 예상 지출
              </Typography>
            </Box>

            {/* 총 예상 지출액 */}
            <Box sx={{ textAlign: 'center', mb: 4, p: 3, bgcolor: '#e8f5e8', borderRadius: 3 }}>
              <Typography variant="h3" sx={{ color: '#2e7d32', fontWeight: 700, mb: 1 }}>
                💰 {totalExpense.toLocaleString()}만원
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                총 예상 지출액
              </Typography>
            </Box>

            {/* 곡선 그래프 */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ height: 150, position: 'relative', mb: 2 }}>
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="expenseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4caf50" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#81c784" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0 ${150 - (monthlyExpenses[0] / 80) * 120} ${monthlyExpenses.map((expense, index) => {
                      const x = (index / (monthlyExpenses.length - 1)) * 100;
                      const y = 150 - (expense / 80) * 120;
                      return `L ${x} ${y}`;
                    }).join(' ')}`}
                    stroke="url(#expenseGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {monthlyExpenses.map((expense, index) => {
                    const x = (index / (monthlyExpenses.length - 1)) * 100;
                    const y = 150 - (expense / 80) * 120;
                    return (
                      <circle
                        key={index}
                        cx={`${x}%`}
                        cy={y}
                        r="4"
                        fill="#4caf50"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#666' }}>
                <span>1월</span>
                <span>3월</span>
                <span>6월</span>
                <span>9월</span>
                <span>12월</span>
              </Box>
            </Box>

            {/* 지출 구성 요약 */}
            <Box>
              <Typography variant="subtitle1" sx={{ color: '#2e7d32', fontWeight: 500, mb: 2 }}>
                💡 지출 구성
              </Typography>
              <Box sx={{ display: 'grid', gap: 1 }}>
                {expenseBreakdown.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ fontSize: '1.2rem' }}>{item.icon}</Box>
                    <Typography variant="body2" sx={{ flex: 1, color: '#666' }}>
                      {item.category}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={item.percentage} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          bgcolor: '#e8f5e8',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: item.color,
                            borderRadius: 4
                          }
                        }} 
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: '#2e7d32', fontWeight: 500, minWidth: '40px' }}>
                      {item.percentage}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* 유사 가족 지출 비교 */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #f8fff8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <FamilyIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                👥 나와 닮은 가족은 이렇게 썼어요
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {similarFamilies.map((family, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      background: 'white',
                      border: `2px solid ${family.color}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: family.color, mr: 2, fontSize: '1.2rem' }}>
                          {family.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                            {family.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationIcon sx={{ fontSize: 14, color: '#666' }} />
                            <Typography variant="caption" sx={{ color: '#666' }}>
                              {family.location}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Chip 
                          label={family.income} 
                          size="small" 
                          sx={{ 
                            bgcolor: '#e8f5e8', 
                            color: '#2e7d32',
                            mb: 1,
                            fontSize: '0.75rem'
                          }} 
                        />
                        <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                          {family.expense}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                          <TrendingUpIcon sx={{ fontSize: 16, color: '#ff9800' }} />
                          <Typography variant="caption" sx={{ color: '#ff9800', fontWeight: 500 }}>
                            {family.rating}점
                          </Typography>
                        </Box>
                      </Box>

                      <Typography variant="body2" sx={{ color: '#666', mb: 2, fontStyle: 'italic' }}>
                        "{family.comment}"
                      </Typography>

                      <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{
                          borderColor: family.color,
                          color: family.color,
                          '&:hover': {
                            borderColor: family.color,
                            bgcolor: `${family.color}10`,
                          }
                        }}
                      >
                        자세히 보기
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExpensePlanningTab; 