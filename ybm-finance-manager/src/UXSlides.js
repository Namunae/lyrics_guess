import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box, Typography, Button, Card, CardContent, TextField, MenuItem, Drawer, List, ListItem, ListItemText, IconButton, Divider, Slider, Alert, BottomNavigation, BottomNavigationAction } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import TimelineIcon from "@mui/icons-material/Timeline";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import ForumIcon from "@mui/icons-material/Forum";
import HelpIcon from "@mui/icons-material/Help";

const pastel = {
  mint: "#B2F2E5",
  peach: "#FFD6C0",
  lavender: "#E3D7FF",
  sky: "#B3E5FC",
  yellow: "#FFF9C4",
};

const fontFamily = "'Spoqa Han Sans', 'Noto Sans KR', sans-serif";

// 1. Home Dashboard
function HomeDashboard() {
  return (
    <Box sx={{ p: 2, bgcolor: pastel.mint, minHeight: "100vh", fontFamily }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        예비 부모 금융 매니저
      </Typography>
      <Card sx={{ mb: 2, bgcolor: pastel.lavender }}>
        <CardContent>
          <Typography color="text.secondary">임신 주차</Typography>
          <Typography variant="h4" fontWeight="bold">24주</Typography>
        </CardContent>
      </Card>
      <Card sx={{ mb: 2, bgcolor: pastel.peach }}>
        <CardContent>
          <Typography color="text.secondary">예상 지출</Typography>
          <Typography variant="h4" fontWeight="bold">₩1,200,000</Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 4 }}>
        <Button variant="contained" sx={{ bgcolor: pastel.sky, color: "#333" }}>지출 시뮬레이터</Button>
        <Button variant="contained" sx={{ bgcolor: pastel.lavender, color: "#333" }}>정부 지원금 추천</Button>
        <Button variant="contained" sx={{ bgcolor: pastel.peach, color: "#333" }}>월별 지출 타임라인</Button>
      </Box>
    </Box>
  );
}

// 2. Expense Simulator
function ExpenseSimulator() {
  const [week, setWeek] = useState(24);
  const [income, setIncome] = useState("");
  const [region, setRegion] = useState("");
  return (
    <Box sx={{ p: 2, bgcolor: pastel.sky, minHeight: "100vh", fontFamily }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>지출 시뮬레이터</Typography>
      <Box sx={{ mb: 2 }}>
        <Typography>임신 주차: {week}주</Typography>
        <Slider min={1} max={40} value={week} onChange={(_, v) => setWeek(v)} sx={{ color: pastel.lavender }} />
      </Box>
      <TextField
        label="가구 소득(만원)"
        value={income}
        onChange={e => setIncome(e.target.value)}
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
      />
      <TextField
        select
        label="거주 지역"
        value={region}
        onChange={e => setRegion(e.target.value)}
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
      >
        <MenuItem value="서울">서울</MenuItem>
        <MenuItem value="경기">경기</MenuItem>
        <MenuItem value="부산">부산</MenuItem>
        <MenuItem value="기타">기타</MenuItem>
      </TextField>
      <Button variant="contained" sx={{ bgcolor: pastel.peach, color: "#333", mb: 2 }}>시뮬레이션 시작</Button>
      <Card sx={{ bgcolor: pastel.lavender }}>
        <CardContent>
          <Typography>예상 지출 그래프</Typography>
          <Box sx={{ height: 120, bgcolor: "#fff", borderRadius: 2, mt: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
            (그래프 자리)
          </Box>
          <Typography sx={{ mt: 2 }}>월별/누적 지출 예측</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// 3. Government Benefits Recommender
function BenefitsRecommender() {
  const [income, setIncome] = useState("");
  const [region, setRegion] = useState("");
  const [family, setFamily] = useState("");
  return (
    <Box sx={{ p: 2, bgcolor: pastel.lavender, minHeight: "100vh", fontFamily }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>AI 정부 지원금 추천</Typography>
      <TextField
        label="가구 소득(만원)"
        value={income}
        onChange={e => setIncome(e.target.value)}
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
      />
      <TextField
        select
        label="거주 지역"
        value={region}
        onChange={e => setRegion(e.target.value)}
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
      >
        <MenuItem value="서울">서울</MenuItem>
        <MenuItem value="경기">경기</MenuItem>
        <MenuItem value="부산">부산</MenuItem>
        <MenuItem value="기타">기타</MenuItem>
      </TextField>
      <TextField
        select
        label="가족 형태"
        value={family}
        onChange={e => setFamily(e.target.value)}
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
      >
        <MenuItem value="맞벌이">맞벌이</MenuItem>
        <MenuItem value="외벌이">외벌이</MenuItem>
        <MenuItem value="한부모">한부모</MenuItem>
      </TextField>
      <Button variant="contained" sx={{ bgcolor: pastel.mint, color: "#333", mb: 2 }}>자세히 보기</Button>
      <Card sx={{ bgcolor: pastel.sky }}>
        <CardContent>
          <Typography>추천 지원금</Typography>
          <List>
            <ListItem>출산 지원금</ListItem>
            <ListItem>육아 수당</ListItem>
            <ListItem>지역별 혜택</ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

// 4. Monthly Expense Timeline
function ExpenseTimeline() {
  return (
    <Box sx={{ p: 2, bgcolor: pastel.peach, minHeight: "100vh", fontFamily }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>월별 지출 타임라인</Typography>
      <Card sx={{ bgcolor: pastel.lavender }}>
        <CardContent>
          <Typography>아이 나이 (0~6세)별 월별 지출</Typography>
          <Box sx={{ height: 120, bgcolor: "#fff", borderRadius: 2, mt: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
            (타임라인 그래프 자리)
          </Box>
          <Typography sx={{ mt: 2 }}>보육원 입학, 예방접종, 육아용품 구매 등 주요 이벤트 표시</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="caption">지출 항목별 색상</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// 5. Benefit Application Guide
function BenefitGuide() {
  return (
    <Box sx={{ p: 2, bgcolor: pastel.lavender, minHeight: "100vh", fontFamily }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>지원금 신청 가이드</Typography>
      <Card sx={{ bgcolor: pastel.sky }}>
        <CardContent>
          <Typography>1. 신청 방법 안내</Typography>
          <Typography>2. 필요 서류</Typography>
          <Typography>3. 신청 링크</Typography>
          <Divider sx={{ my: 1 }} />
          <Button variant="outlined" sx={{ mr: 1 }} href="https://www.gov.kr/" target="_blank">정부24 바로가기</Button>
          <Button variant="outlined" href="#">지역 복지센터</Button>
          <Divider sx={{ my: 1 }} />
          <Typography>필요 서류:</Typography>
          <List>
            <ListItem>주민등록등본</ListItem>
            <ListItem>소득 증빙서류</ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

// 6. Notification Center
function NotificationCenter() {
  return (
    <Box sx={{ p: 2, bgcolor: pastel.sky, minHeight: "100vh", fontFamily }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>알림 센터</Typography>
      <Alert severity="info" sx={{ mb: 2 }}>지원금 신청 마감 3일 전!</Alert>
      <Alert severity="warning" sx={{ mb: 2 }}>정책 변경 안내</Alert>
      <Alert severity="success" sx={{ mb: 2 }}>새로운 혜택 알림</Alert>
      <Button variant="contained" sx={{ bgcolor: pastel.lavender, color: "#333" }}>알림 설정</Button>
    </Box>
  );
}

// 7. GNB/Sidebar
function Sidebar({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250, bgcolor: pastel.mint, height: "100%" }}>
        <Box sx={{ p: 2, bgcolor: pastel.lavender }}>
          <Typography variant="h6" fontWeight="bold">사용자 정보</Typography>
        </Box>
        <Divider />
        <List>
          <ListItem button>
            <SettingsIcon sx={{ mr: 1 }} />
            <ListItemText primary="설정" />
          </ListItem>
          <ListItem button>
            <ForumIcon sx={{ mr: 1 }} />
            <ListItemText primary="커뮤니티" />
          </ListItem>
          <ListItem button>
            <HelpIcon sx={{ mr: 1 }} />
            <ListItemText primary="자주 묻는 질문" />
          </ListItem>
          <ListItem button>
            <BarChartIcon sx={{ mr: 1 }} />
            <ListItemText primary="금융 내역 관리" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <LogoutIcon sx={{ mr: 1 }} />
            <ListItemText primary="로그아웃" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

// Main Slide Deck
export default function UXSlides() {
  const [tab, setTab] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const screens = [
    <HomeDashboard key="home" />,
    <ExpenseSimulator key="sim" />,
    <BenefitsRecommender key="benefit" />,
    <ExpenseTimeline key="timeline" />,
    <BenefitGuide key="guide" />,
    <NotificationCenter key="noti" />,
  ];

  return (
    <Box sx={{ fontFamily }}>
      <AppBar position="static" sx={{ bgcolor: pastel.mint, color: "#333" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => setSidebar(true)}><MenuIcon /></IconButton>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ flex: 1 }}
          >
            <Tab label="홈" />
            <Tab label="시뮬레이터" />
            <Tab label="지원금" />
            <Tab label="타임라인" />
            <Tab label="가이드" />
            <Tab label="알림" />
          </Tabs>
        </Box>
      </AppBar>
      <Sidebar open={sidebar} onClose={() => setSidebar(false)} />
      <Box>
        {screens[tab]}
      </Box>
      <BottomNavigation
        showLabels
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, bgcolor: pastel.mint }}
        value={tab}
        onChange={(_, v) => setTab(v)}
      >
        <BottomNavigationAction label="홈" icon={<HomeIcon />} />
        <BottomNavigationAction label="알림" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="설정" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}