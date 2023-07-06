import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    display: "Trang chủ",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home"
  },// Duong dan Homepage
  {
    display: "Phim lẻ",
    path: "/movie",
    icon: <SlideshowOutlinedIcon />,
    state: "movie"
  },// Duong dan den danh sach phim le
  {
    display: "Phim bộ",
    path: "/tv",
    icon: <LiveTvOutlinedIcon />,
    state: "tv"
  },// Duong dan den danh sach phim bo
  {
    display: "Tìm kiếm",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search"
  }// Duong dan den thanh tim kiem
];

const user = [
  {
    display: "Ưa thích",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite"
  },// Duong dan den danh sach ua thich
  {
    display: "Đánh giá",
    path: "/reviews",
    icon: <RateReviewOutlinedIcon />,
    state: "reviews"
  },// Duong dan den danh gia phim
  {
    display: "Cập nhật mật khẩu",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update"
  }// Duong dan den cap nhat mat khau
];

const menuConfigs = { main, user };

export default menuConfigs;