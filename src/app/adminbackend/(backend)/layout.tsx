'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { FaUserCircle, FaBars, FaTimes, FaHome, FaUsers, FaCog } from 'react-icons/fa';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: <FaHome className="mr-3" /> },
    { name: 'Users', href: '/admin/users', icon: <FaUsers className="mr-3" /> },
    { name: 'Settings', href: '/admin/settings', icon: <FaCog className="mr-3" /> },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transform fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-blue-600 text-white flex flex-col p-5 space-y-4
          transition-transform duration-200 ease-in-out lg:transition-none`}
      >
        <div className="flex items-center justify-between lg:block">
          <h1 className="text-2xl font-bold hidden lg:block">Admin Panel</h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center px-4 py-3 rounded-md transition-all ${
                pathname === item.href
                  ? 'bg-blue-800 font-medium'
                  : 'hover:bg-blue-700 hover:bg-opacity-50'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* User Info and Logout */}
        <div className="mt-auto pt-4 border-t border-blue-500">
          <div className="flex items-center space-x-3 mb-4">
            <FaUserCircle className="text-2xl text-blue-200" />
            <span className="font-medium">Admin User</span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/adminbackend' })}
            className="w-full flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6 overflow-auto bg-white lg:rounded-tl-lg shadow-inner">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs or page title can go here */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;