import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  IconButton
} from '@mui/material';
import {
  CardGiftcard as GiftIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  Notifications as NotificationIcon,
  ArrowForward as ArrowIcon,
  Star as StarIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';
import PoingCharacter from './PoingCharacter';

const BenefitRecommendationTab = () => {
  const [location, setLocation] = useState('seoul');
  const [childrenCount, setChildrenCount] = useState(1);
  const [incomeLevel, setIncomeLevel] = useState('middle');
  const [poingExpression, setPoingExpression] = useState('helping');
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechText, setSpeechText] = useState('');

  const handleBenefitClick = (benefit) => {
    setPoingExpression('celebrating');
    setSpeechText(`${benefit.name} 신청을 도와드릴게요! 🎉`);
    setShowSpeechBubble(true);
    setTimeout(() => setShowSpeechBubble(false), 3000);
  };

  // AI 기반 맞춤 혜택 데이터
  const recommendedBenefits = [
    {
      id: 1,
      name: '출산장려금',
      summary: '출산을 축하하는 정부 지원금',
      amount: '200만원',
      condition: '서울시 거주자, 출산 후 1년 내 신청',
      documents: ['출생증명서', '주민등록등본', '소득증빙서류'],
      method: '온라인 또는 주민센터',
      duration: '15일',
      agency: '서울시청',
      icon: '👶',
      color: '#ffb3d9',
      priority: 'high'
    },
    {
      id: 2,
      name: '육아수당',
      summary: '만 0-2세 자녀 양육 지원금',
      amount: '월 30만원',
      condition: '만 0-2세 자녀, 소득 기준 충족',
      documents: ['주민등록등본', '소득증빙서류', '양육비 지급 신청서'],
      method: '복지로 온라인 신청',
      duration: '30일',
      agency: '보건복지부',
      icon: '🧸',
      color: '#b3d9ff',
      priority: 'high'
    },
    {
      id: 3,
      name: '세금공제',
      summary: '육아 관련 비용 세금 공제',
      amount: '최대 120만원',
      condition: '연간 소득 1,200만원 이하',
      documents: ['종합소득세 신고서', '의료비 영수증', '교육비 영수증'],
      method: '연말정산 시 신고',
      duration: '연 1회',
      agency: '국세청',
      icon: '💰',
      color: '#d9ffb3',
      priority: 'medium'
    }
  ];

  // 알림 데이터
  const notifications = [
    {
      id: 1,
      type: 'urgent',
      title: '육아휴직 신청 마감일',
      date: '2024-03-15',
      daysLeft: 3,
      description: '출산 후 1개월 내 신청해야 합니다!',
      icon: '⚠️'
    },
    {
      id: 2,
      type: 'info',
      title: '출산장려금 신청',
      date: '2024-03-20',
      daysLeft: 8,
      description: '서울시 출산장려금 신청 기간입니다.',
      icon: '📅'
    },
    {
      id: 3,
      type: 'reminder',
      title: '세금 환급',
      date: '2024-05-31',
      daysLeft: 75,
      description: '연말정산 세금 환급 예정일입니다.',
      icon: '💸'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* 헤더 섹션 */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <PoingCharacter 
          size={120} 
          style={{ margin: '0 auto 20px' }} 
          mood="excited"
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
          🎁 혜택 추천
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', fontWeight: 300 }}>
          포잉이가 찾아준 맞춤형 정부 지원금을 확인해보세요!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* AI 기반 맞춤 혜택 추천 */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #fff8f8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <GiftIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                🤖 AI 기반 맞춤 혜택 추천
              </Typography>
            </Box>

            {/* 입력 폼 */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>지역</InputLabel>
                  <Select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    sx={{ bgcolor: 'white' }}
                  >
                    <MenuItem value="seoul">서울</MenuItem>
                    <MenuItem value="busan">부산</MenuItem>
                    <MenuItem value="daegu">대구</MenuItem>
                    <MenuItem value="incheon">인천</MenuItem>
                    <MenuItem value="daejeon">대전</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>자녀 수</InputLabel>
                  <Select
                    value={childrenCount}
                    onChange={(e) => setChildrenCount(e.target.value)}
                    sx={{ bgcolor: 'white' }}
                  >
                    <MenuItem value={1}>1명</MenuItem>
                    <MenuItem value={2}>2명</MenuItem>
                    <MenuItem value={3}>3명 이상</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>소득 분위</InputLabel>
                  <Select
                    value={incomeLevel}
                    onChange={(e) => setIncomeLevel(e.target.value)}
                    sx={{ bgcolor: 'white' }}
                  >
                    <MenuItem value="low">저소득</MenuItem>
                    <MenuItem value="middle">중위소득</MenuItem>
                    <MenuItem value="high">고소득</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* 추천 혜택 카드들 */}
            <Grid container spacing={3}>
              {recommendedBenefits.map((benefit, index) => (
                <Grid item xs={12} md={4} key={benefit.id}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      background: 'white',
                      border: `2px solid ${benefit.color}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ fontSize: '2rem', mr: 2 }}>{benefit.icon}</Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                            {benefit.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#666' }}>
                            {benefit.summary}
                          </Typography>
                        </Box>
                        {benefit.priority === 'high' && (
                          <StarIcon sx={{ color: '#ff9800', fontSize: 20 }} />
                        )}
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" sx={{ color: benefit.color, fontWeight: 700, mb: 1 }}>
                          {benefit.amount}
                        </Typography>
                        <Chip 
                          label={benefit.condition} 
                          size="small" 
                          sx={{ 
                            bgcolor: '#e8f5e8', 
                            color: '#2e7d32',
                            fontSize: '0.75rem'
                          }} 
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: '#2e7d32', mb: 1 }}>
                          필요 서류
                        </Typography>
                        <List dense sx={{ py: 0 }}>
                          {benefit.documents.slice(0, 2).map((doc, idx) => (
                            <ListItem key={idx} sx={{ py: 0, px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 24 }}>
                                <CheckIcon sx={{ fontSize: 16, color: '#4caf50' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={doc} 
                                sx={{ 
                                  '& .MuiListItemText-primary': { 
                                    fontSize: '0.8rem',
                                    color: '#666'
                                  } 
                                }} 
                              />
                            </ListItem>
                          ))}
                          {benefit.documents.length > 2 && (
                            <ListItem sx={{ py: 0, px: 0 }}>
                              <ListItemText 
                                primary={`외 ${benefit.documents.length - 2}개`} 
                                sx={{ 
                                  '& .MuiListItemText-primary': { 
                                    fontSize: '0.8rem',
                                    color: '#666',
                                    fontStyle: 'italic'
                                  } 
                                }} 
                              />
                            </ListItem>
                          )}
                        </List>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#666', display: 'block' }}>
                            처리 소요: {benefit.duration}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            담당: {benefit.agency}
                          </Typography>
                        </Box>
                      </Box>

                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleBenefitClick(benefit)}
                        sx={{
                          bgcolor: benefit.color,
                          color: 'white',
                          '&:hover': {
                            bgcolor: benefit.color,
                            opacity: 0.9,
                          }
                        }}
                        endIcon={<ArrowIcon />}
                      >
                        신청하러 가기
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* 혜택 알림 기능 */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #fff8f8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <NotificationIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                🔔 혜택 알림
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {notifications.map((notification) => (
                <Grid item xs={12} sm={6} md={4} key={notification.id}>
                  <Alert
                    severity={notification.type === 'urgent' ? 'warning' : 'info'}
                    icon={<CalendarIcon />}
                    sx={{
                      borderRadius: 3,
                      '& .MuiAlert-message': {
                        width: '100%'
                      }
                    }}
                    action={
                      <IconButton
                        color="inherit"
                        size="small"
                        sx={{ color: '#2e7d32' }}
                      >
                        <ArrowIcon />
                      </IconButton>
                    }
                  >
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {notification.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                        {notification.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ScheduleIcon sx={{ fontSize: 16, color: '#666' }} />
                        <Typography variant="caption" sx={{ color: '#666' }}>
                          {notification.date} ({notification.daysLeft}일 남음)
                        </Typography>
                      </Box>
                    </Box>
                  </Alert>
                </Grid>
              ))}
            </Grid>

            {/* 포잉이 알림 메시지 */}
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <PoingCharacter 
                size={80} 
                mood="caring"
                expression="warning"
                showSpeechBubble={true}
                speechText="신청 잊지 마세요! 포잉이가 알려드릴게요! ⏰"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BenefitRecommendationTab; 