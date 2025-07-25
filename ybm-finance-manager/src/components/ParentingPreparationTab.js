import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  Avatar,
  Divider
} from '@mui/material';
import {
  ChildCare as ChildCareIcon,
  CheckCircle as CheckIcon,
  ShoppingCart as ShoppingIcon,
  Star as StarIcon,
  LocationOn as LocationIcon,
  TrendingUp as TrendingUpIcon,
  Favorite as FavoriteIcon,
  Compare as CompareIcon
} from '@mui/icons-material';
import PoingCharacter from './PoingCharacter';

const ParentingPreparationTab = () => {
  const [selectedLocation, setSelectedLocation] = useState('seoul');
  const [poingExpression, setPoingExpression] = useState('helping');
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [speechText, setSpeechText] = useState('');

  const handleChecklistChange = (category, itemId) => {
    setPoingExpression('celebrating');
    setSpeechText('잘하고 있어요! 포잉이가 응원할게요! 🎉');
    setShowSpeechBubble(true);
    setTimeout(() => setShowSpeechBubble(false), 3000);
  };

  // 임신 주기별 체크리스트
  const pregnancyChecklist = {
    firstTrimester: {
      title: '1기 (1-12주)',
      items: [
        { id: 1, text: '산부인과 첫 진료', completed: true },
        { id: 2, text: '엽산 복용 시작', completed: true },
        { id: 3, text: '임신 신고서 제출', completed: false },
        { id: 4, text: '산전 검사 계획', completed: false },
        { id: 5, text: '출산 병원 선정', completed: false }
      ]
    },
    secondTrimester: {
      title: '2기 (13-28주)',
      items: [
        { id: 6, text: '산전 검사 완료', completed: true },
        { id: 7, text: '출산 준비 교육 신청', completed: true },
        { id: 8, text: '육아용품 리스트 작성', completed: false },
        { id: 9, text: '조리원 예약', completed: false },
        { id: 10, text: '출산용품 준비', completed: false }
      ]
    },
    thirdTrimester: {
      title: '3기 (29-40주)',
      items: [
        { id: 11, text: '출산용품 구매 완료', completed: false },
        { id: 12, text: '조리원 계약 완료', completed: false },
        { id: 13, text: '출산 계획서 작성', completed: false },
        { id: 14, text: '가족들과 역할 분담', completed: false },
        { id: 15, text: '출산 가방 준비', completed: false }
      ]
    }
  };

  // 육아 물가 데이터
  const babyProducts = [
    {
      id: 1,
      name: '기저귀 (팩당)',
      seoul: 25000,
      busan: 23000,
      daegu: 24000,
      incheon: 24500,
      category: '필수용품',
      icon: '👶',
      color: '#ffb3d9',
      rating: 4.5,
      reviews: 1280
    },
    {
      id: 2,
      name: '분유 (캔)',
      seoul: 35000,
      busan: 33000,
      daegu: 34000,
      incheon: 34500,
      category: '영양',
      icon: '🍼',
      color: '#b3d9ff',
      rating: 4.3,
      reviews: 890
    },
    {
      id: 3,
      name: '우유병',
      seoul: 15000,
      busan: 14000,
      daegu: 14500,
      incheon: 14800,
      category: '필수용품',
      icon: '🍼',
      color: '#d9ffb3',
      rating: 4.7,
      reviews: 650
    },
    {
      id: 4,
      name: '유모차',
      seoul: 350000,
      busan: 330000,
      daegu: 340000,
      incheon: 345000,
      category: '외출용품',
      icon: '🚼',
      color: '#ffd9b3',
      rating: 4.6,
      reviews: 420
    }
  ];

  // 브랜드 비교 데이터
  const brandComparison = [
    {
      brand: '하기스',
      category: '기저귀',
      price: '25,000원',
      rating: 4.5,
      pros: ['흡수력 우수', '피부 친화적'],
      cons: ['가격이 비쌈'],
      reviews: 1250,
      color: '#ffb3d9'
    },
    {
      brand: '메디하드',
      category: '기저귀',
      price: '18,000원',
      rating: 4.2,
      pros: ['가성비 좋음', '실용적'],
      cons: ['흡수력 다소 부족'],
      reviews: 890,
      color: '#b3d9ff'
    },
    {
      brand: '아기사랑',
      category: '기저귀',
      price: '22,000원',
      rating: 4.4,
      pros: ['친환경 소재', '부드러움'],
      cons: ['가격 중간'],
      reviews: 650,
      color: '#d9ffb3'
    }
  ];

  const getLocationPrice = (product) => {
    return product[selectedLocation];
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* 헤더 섹션 */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <PoingCharacter 
          size={120} 
          style={{ margin: '0 auto 20px' }} 
          mood="caring"
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
          🧸 육아 준비
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', fontWeight: 300 }}>
          포잉이와 함께 체계적으로 육아 준비를 해보세요!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* 육아 체크리스트 */}
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
              <ChildCareIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                ✅ 육아 체크리스트
              </Typography>
            </Box>

            {Object.entries(pregnancyChecklist).map(([key, trimester]) => (
              <Box key={key} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: '#2e7d32', mb: 2, fontWeight: 600 }}>
                  {trimester.title}
                </Typography>
                <List dense>
                  {trimester.items.map((item) => (
                    <ListItem key={item.id} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Checkbox
                          checked={item.completed}
                          onChange={() => handleChecklistChange(key, item.id)}
                          sx={{
                            color: '#4caf50',
                            '&.Mui-checked': {
                              color: '#4caf50',
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.text}
                        sx={{
                          '& .MuiListItemText-primary': {
                            textDecoration: item.completed ? 'line-through' : 'none',
                            color: item.completed ? '#666' : '#333',
                            fontSize: '0.9rem'
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
              </Box>
            ))}

            {/* 진행률 표시 */}
            <Box sx={{ mt: 3, p: 2, bgcolor: '#e8f5e8', borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#2e7d32', mb: 1 }}>
                전체 진행률
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ flex: 1, bgcolor: '#c8e6c9', borderRadius: 1, height: 8 }}>
                  <Box 
                    sx={{ 
                      bgcolor: '#4caf50', 
                      height: '100%', 
                      borderRadius: 1,
                      width: '40%' // 실제로는 계산된 값
                    }} 
                  />
                </Box>
                <Typography variant="body2" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                  40%
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* 육아 물가 비교 */}
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
              <ShoppingIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                💰 육아 물가 비교
              </Typography>
            </Box>

            {/* 지역 선택 */}
            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth size="small">
                <InputLabel>지역 선택</InputLabel>
                <Select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  sx={{ bgcolor: 'white' }}
                >
                  <MenuItem value="seoul">서울</MenuItem>
                  <MenuItem value="busan">부산</MenuItem>
                  <MenuItem value="daegu">대구</MenuItem>
                  <MenuItem value="incheon">인천</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* 물가 리스트 */}
            <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
              {babyProducts.map((product) => (
                <Card key={product.id} sx={{ mb: 2, border: `1px solid ${product.color}` }}>
                  <CardContent sx={{ py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Box sx={{ fontSize: '1.5rem', mr: 1 }}>{product.icon}</Box>
                      <Typography variant="subtitle1" sx={{ flex: 1, fontWeight: 600 }}>
                        {product.name}
                      </Typography>
                      <Chip 
                        label={product.category} 
                        size="small" 
                        sx={{ 
                          bgcolor: product.color, 
                          color: 'white',
                          fontSize: '0.7rem'
                        }} 
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 700 }}>
                        {getLocationPrice(product).toLocaleString()}원
                      </Typography>
                      <Rating value={product.rating} readOnly size="small" />
                      <Typography variant="caption" sx={{ color: '#666' }}>
                        ({product.reviews}개 리뷰)
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* 브랜드 비교 */}
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
              <CompareIcon sx={{ color: '#4caf50', mr: 1, fontSize: 28 }} />
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                🔍 브랜드 비교
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {brandComparison.map((brand, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      background: 'white',
                      border: `2px solid ${brand.color}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: brand.color, mr: 2, fontSize: '1.2rem' }}>
                          {brand.brand.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                            {brand.brand}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            {brand.category}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" sx={{ color: brand.color, fontWeight: 700, mb: 1 }}>
                          {brand.price}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Rating value={brand.rating} readOnly size="small" />
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            ({brand.reviews}개 리뷰)
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: '#2e7d32', mb: 1 }}>
                          장점
                        </Typography>
                        {brand.pros.map((pro, idx) => (
                          <Typography key={idx} variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                            ✅ {pro}
                          </Typography>
                        ))}
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: '#d32f2f', mb: 1 }}>
                          단점
                        </Typography>
                        {brand.cons.map((con, idx) => (
                          <Typography key={idx} variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                            ❌ {con}
                          </Typography>
                        ))}
                      </Box>

                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: brand.color,
                          color: brand.color,
                          '&:hover': {
                            borderColor: brand.color,
                            bgcolor: `${brand.color}10`,
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

export default ParentingPreparationTab; 