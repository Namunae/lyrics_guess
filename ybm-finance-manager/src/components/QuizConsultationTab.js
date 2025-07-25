import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
  Avatar,
  Divider
} from '@mui/material';
import {
  Quiz as QuizIcon,
  Chat as ChatIcon,
  Lightbulb as LightbulbIcon,
  School as SchoolIcon,
  Send as SendIcon,
  EmojiEvents as TrophyIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';
import PoingCharacter from './PoingCharacter';

const QuizConsultationTab = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [poingExpression, setPoingExpression] = useState('helping');
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechText, setSpeechText] = useState('');

  // 퀴즈 데이터
  const quizzes = [
    {
      id: 1,
      question: "출산장려금은 언제까지 신청해야 할까요?",
      options: [
        "출산 후 1개월 내",
        "출산 후 3개월 내", 
        "출산 후 6개월 내",
        "출산 후 1년 내"
      ],
      correctAnswer: 3,
      explanation: "출산장려금은 출산 후 1년 내에 신청해야 합니다. 빠른 신청을 권장해요!",
      category: "정책"
    },
    {
      id: 2,
      question: "육아수당은 몇 세까지 받을 수 있을까요?",
      options: [
        "만 0-1세",
        "만 0-2세",
        "만 0-3세", 
        "만 0-6세"
      ],
      correctAnswer: 1,
      explanation: "육아수당은 만 0-2세 자녀를 양육하는 가정에 지원됩니다.",
      category: "수당"
    },
    {
      id: 3,
      question: "산전검사는 몇 주차에 받는 것이 좋을까요?",
      options: [
        "4-6주차",
        "8-12주차",
        "16-20주차",
        "24-28주차"
      ],
      correctAnswer: 1,
      explanation: "첫 산전검사는 8-12주차에 받는 것이 적절합니다.",
      category: "의료"
    }
  ];

  // 카드뉴스 데이터
  const cardNews = [
    {
      id: 1,
      title: "놓치기 쉬운 정책 TOP 5",
      content: "많은 예비 부모들이 모르고 있는 혜택들을 정리해드려요!",
      icon: "📋",
      color: "#ffb3d9",
      items: [
        "출산장려금 (지역별 차등)",
        "육아수당 (소득 기준)",
        "세금공제 (의료비, 교육비)",
        "육아휴직 급여",
        "아동수당 (만 8세 이하)"
      ]
    },
    {
      id: 2,
      title: "1분 제도 요약",
      content: "복잡한 정책을 쉽게 이해할 수 있도록 정리했어요!",
      icon: "⏰",
      color: "#b3d9ff",
      items: [
        "신청 시기: 출산 후 1년 내",
        "필요 서류: 출생증명서, 주민등록등본",
        "지원 금액: 지역별 50-200만원",
        "신청 방법: 온라인 또는 주민센터",
        "처리 기간: 15-30일"
      ]
    }
  ];

  const handleQuizAnswer = () => {
    if (selectedAnswer === quizzes[currentQuiz].correctAnswer) {
      setScore(score + 10);
      setPoingExpression('celebrating');
      setSpeechText('정답이에요! +10포잉 포인트 획득! 🎉');
    } else {
      setPoingExpression('thoughtful');
      setSpeechText('아쉽네요! 다시 한번 공부해보세요 💡');
    }
    setShowResult(true);
    setShowSpeechBubble(true);
    setTimeout(() => setShowSpeechBubble(false), 3000);
  };

  const handleNextQuiz = () => {
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer('');
      setShowResult(false);
      setPoingExpression('helping');
    }
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: chatMessage,
        isUser: true,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setChatHistory([...chatHistory, newMessage]);
      
      // 포잉이 응답 (간단한 챗봇)
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: getBotResponse(chatMessage),
          isUser: false,
          timestamp: new Date().toLocaleTimeString()
        };
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
      
      setChatMessage('');
    }
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('출산장려금')) {
      return '출산장려금은 출산 후 1년 내에 신청하시면 됩니다! 지역별로 지원 금액이 다르니 확인해보세요 💰';
    } else if (lowerMessage.includes('육아수당')) {
      return '육아수당은 만 0-2세 자녀를 양육하는 가정에 지원됩니다. 소득 기준을 확인해보세요 👶';
    } else if (lowerMessage.includes('세금')) {
      return '육아 관련 비용은 세금공제 대상입니다. 의료비, 교육비 등을 연말정산 시 신고하세요 💸';
    } else {
      return '궁금한 점이 있으시면 언제든 물어보세요! 포잉이가 도와드릴게요 🌱';
    }
  };

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
          📚 퀴즈·상담
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', fontWeight: 300 }}>
          포잉이와 함께 재미있게 배우고 상담받아보세요!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* 퀴즈 섹션 */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #fff8f8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8',
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <QuizIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                🎯 육아 퀴즈
              </Typography>
            </Box>

            {/* 점수 표시 */}
            <Box sx={{ mb: 3, p: 2, bgcolor: '#e8f5e8', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TrophyIcon sx={{ color: '#ff9800' }} />
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                  포잉 포인트: {score}점
                </Typography>
              </Box>
            </Box>

            {/* 퀴즈 문제 */}
            <Box sx={{ mb: 3 }}>
              <Chip 
                label={quizzes[currentQuiz].category} 
                sx={{ 
                  bgcolor: '#4caf50', 
                  color: 'white',
                  mb: 2
                }} 
              />
              <Typography variant="h6" sx={{ color: '#2e7d32', mb: 3, fontWeight: 600 }}>
                {quizzes[currentQuiz].question}
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(Number(e.target.value))}
                >
                  {quizzes[currentQuiz].options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={index}
                      control={<Radio />}
                      label={option}
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          fontSize: '0.9rem',
                          color: '#333'
                        }
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>

            {/* 결과 표시 */}
            {showResult && (
              <Alert 
                severity={selectedAnswer === quizzes[currentQuiz].correctAnswer ? 'success' : 'info'}
                sx={{ mb: 3 }}
              >
                <Typography variant="body2">
                  {quizzes[currentQuiz].explanation}
                </Typography>
              </Alert>
            )}

            {/* 버튼 */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              {!showResult ? (
                <Button
                  variant="contained"
                  onClick={handleQuizAnswer}
                  disabled={selectedAnswer === ''}
                  sx={{
                    bgcolor: '#4caf50',
                    '&:hover': { bgcolor: '#388e3c' }
                  }}
                >
                  정답 확인
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNextQuiz}
                  sx={{
                    bgcolor: '#4caf50',
                    '&:hover': { bgcolor: '#388e3c' }
                  }}
                >
                  다음 문제
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>

        {/* 카드뉴스 섹션 */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              background: 'linear-gradient(135deg, #fff8f8 0%, #f0f8f0 100%)',
              border: '1px solid #e8f5e8',
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <SchoolIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                📰 카드뉴스
              </Typography>
            </Box>

            {cardNews.map((news, index) => (
              <Card key={news.id} sx={{ mb: 3, border: `1px solid ${news.color}` }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ fontSize: '2rem', mr: 2 }}>{news.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                        {news.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {news.content}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <List dense>
                    {news.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <CheckIcon sx={{ fontSize: 16, color: '#4caf50' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.85rem',
                              color: '#333'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Grid>

        {/* 포잉 챗봇 */}
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
              <ChatIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                💬 포잉 챗봇
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                {/* 채팅 영역 */}
                <Box sx={{ height: 400, border: '1px solid #e0e0e0', borderRadius: 2, p: 2, mb: 2 }}>
                  <Box sx={{ height: '100%', overflowY: 'auto' }}>
                    {chatHistory.length === 0 ? (
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <PoingCharacter size={60} />
                        <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                          안녕하세요! 궁금한 점이 있으시면 언제든 물어보세요 🌱
                        </Typography>
                      </Box>
                    ) : (
                      chatHistory.map((message) => (
                        <Box
                          key={message.id}
                          sx={{
                            display: 'flex',
                            justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                            mb: 2
                          }}
                        >
                          <Box
                            sx={{
                              maxWidth: '70%',
                              p: 2,
                              borderRadius: 2,
                              bgcolor: message.isUser ? '#4caf50' : '#f5f5f5',
                              color: message.isUser ? 'white' : '#333'
                            }}
                          >
                            <Typography variant="body2">
                              {message.text}
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.7 }}>
                              {message.timestamp}
                            </Typography>
                          </Box>
                        </Box>
                      ))
                    )}
                  </Box>
                </Box>

                {/* 메시지 입력 */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="궁금한 점을 물어보세요..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    size="small"
                  />
                  <Button
                    variant="contained"
                    onClick={handleSendMessage}
                    sx={{
                      bgcolor: '#4caf50',
                      minWidth: 'auto',
                      px: 2
                    }}
                  >
                    <SendIcon />
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                {/* 빠른 질문 버튼들 */}
                <Typography variant="h6" sx={{ color: '#2e7d32', mb: 2 }}>
                  💡 자주 묻는 질문
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[
                    "출산장려금 신청 방법",
                    "육아수당 지원 조건",
                    "세금공제 혜택",
                    "육아휴직 신청"
                  ].map((question, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      onClick={() => setChatMessage(question)}
                      sx={{
                        borderColor: '#4caf50',
                        color: '#4caf50',
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          borderColor: '#4caf50',
                          bgcolor: '#e8f5e8'
                        }
                      }}
                    >
                      {question}
                    </Button>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuizConsultationTab; 