import { AdminLayout } from '../components/Layouts'
import QuanLyDonHang from '../components/Pages/AdminLayout/QuanLyDonHang'
import QuanLyLoaiSanPham from '../components/Pages/AdminLayout/QuanLyLoaiSanPham'
import QuanLySanPham from '../components/Pages/AdminLayout/QuanLySanPham'
import QuanLyTaiKhoan from '../components/Pages/AdminLayout/QuanLyTaiKhoan'
import ThongKe from '../components/Pages/AdminLayout/ThongKe'
import ChiTietSanPham from '../components/Pages/UserLayout/ChiTietSanPham'
import DangKy from '../components/Pages/UserLayout/DangKy'
import DangNhap from '../components/Pages/UserLayout/DangNhap'
import GioHang from '../components/Pages/UserLayout/GioHang'
import SanPham from '../components/Pages/UserLayout/SanPham'
import TimKiem from '../components/Pages/UserLayout/TimKiem'
import TrangChu from '../components/Pages/UserLayout/TrangChu'

const publicRoutes = [
    { path: '/', component: TrangChu, auth: false },
    // { path: '/shop', component: CuaHang, auth: false },
    // { path: '/category/:nameCategory', component: TheLoai, auth: false },
    { path: '/category/:nameCategory', component: SanPham, auth: false },
    // { path: '/introduce', component: GioiThieu, auth: false  },
    // { path: '/strategic', component: ChienLuoc, auth: false },
    { path: '/search', component: TimKiem, auth: false },
    { path: '/cart', component: GioHang, auth: false },
    { path: '/signin', component: DangNhap, auth: false },
    { path: '/signup', component: DangKy, auth: false },
    { path: '/product/:name', component: ChiTietSanPham, auth: false },

    
    // { path: '/:id', component: Product, auth: false },
    // { path: '/dieu-khoan-dich-vu', component: TermsOfService, auth: false },
    // { path: '/tro-choi-moi', component: GameNew, auth: false },
]

const privateRoutes = [
    { path: '/admin/', component: ThongKe, layout: AdminLayout, auth: true },
    { path: '/admin/products', component: QuanLySanPham, layout: AdminLayout, auth: true },
    { path: '/admin/categories', component: QuanLyLoaiSanPham, layout: AdminLayout, auth: true },
    { path: '/admin/accounts', component: QuanLyTaiKhoan, layout: AdminLayout, auth: true },
    { path: '/admin/orders', component: QuanLyDonHang, layout: AdminLayout, auth: true },
]

export { publicRoutes, privateRoutes }
