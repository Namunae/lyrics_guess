import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  CardGiftcard as GiftIcon,
  ChildCare as ChildCareIcon,
  Quiz as QuizIcon
} from '@mui/icons-material';
import './App.css';

// 새로운 컴포넌트들 import
import PoingCharacter from './components/PoingCharacter';
import ExpensePlanningTab from './components/ExpensePlanningTab';
import BenefitRecommendationTab from './components/BenefitRecommendationTab';
import ParentingPreparationTab from './components/ParentingPreparationTab';
import QuizConsultationTab from './components/QuizConsultationTab';

// 메인 앱 컴포넌트
function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#81c784',
      },
    },
    typography: {
      fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <ExpensePlanningTab />;
      case 1:
        return <BenefitRecommendationTab />;
      case 2:
        return <ParentingPreparationTab />;
      case 3:
        return <QuizConsultationTab />;
      default:
        return <ExpensePlanningTab />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#4caf50' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PoingCharacter size={40} />
              <Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  포잉 (Poing)
                </Typography>
                <Typography variant="caption" sx={{ color: '#e8f5e8' }}>
                  예비 부모를 위한 똑똑한 금융 매니저
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#f9f9f9' }}>
          <Container maxWidth="lg">
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  minHeight: 64,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                },
                '& .Mui-selected': {
                  color: '#2e7d32',
                },
              }}
            >
              <Tab
                icon={<TrendingUpIcon />}
                label="📊 지출 계획"
                sx={{ color: '#666' }}
              />
              <Tab
                icon={<GiftIcon />}
                label="🎁 혜택 추천"
                sx={{ color: '#666' }}
              />
              <Tab
                icon={<ChildCareIcon />}
                label="🧸 육아 준비"
                sx={{ color: '#666' }}
              />
              <Tab
                icon={<QuizIcon />}
                label="📚 퀴즈·상담"
                sx={{ color: '#666' }}
              />
            </Tabs>
          </Container>
        </Box>

        <Box sx={{ bgcolor: '#fafafa', minHeight: 'calc(100vh - 200px)' }}>
          {renderTabContent()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
