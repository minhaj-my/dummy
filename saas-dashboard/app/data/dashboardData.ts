// Dummy revenue and traffic data
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

export const stats = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    icon: DollarSign,
    color: "bg-blue-500",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.3%",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Total Orders",
    value: "1,893",
    change: "+8.2%",
    icon: ShoppingCart,
    color: "bg-purple-500",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+2.5%",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
];

export const recentActivity = [
  {
    user: "John Doe",
    action: "Made a purchase",
    time: "2 mins ago",
    amount: "$249.00",
  },
  {
    user: "Sarah Smith",
    action: "Signed up",
    time: "5 mins ago",
    amount: null,
  },
  {
    user: "Mike Johnson",
    action: "Upgraded plan",
    time: "12 mins ago",
    amount: "$599.00",
  },
  {
    user: "Emma Wilson",
    action: "Made a purchase",
    time: "23 mins ago",
    amount: "$149.00",
  },
  {
    user: "Chris Brown",
    action: "Left a review",
    time: "1 hour ago",
    amount: null,
  },
];

export const revenueData = [
  { month: "Jan", revenue: 4200, users: 240 },
  { month: "Feb", revenue: 5100, users: 300 },
  { month: "Mar", revenue: 4800, users: 280 },
  { month: "Apr", revenue: 6300, users: 350 },
  { month: "May", revenue: 7200, users: 420 },
  { month: "Jun", revenue: 8100, users: 480 },
  { month: "Jul", revenue: 8600, users: 510 },
  { month: "Aug", revenue: 9100, users: 530 },
  { month: "Sep", revenue: 9800, users: 560 },
  { month: "Oct", revenue: 10400, users: 600 },
  { month: "Nov", revenue: 11000, users: 640 },
  { month: "Dec", revenue: 12000, users: 700 },
];

export const trafficData = [
  { name: "Mon", visits: 4000, conversions: 2400 },
  { name: "Tue", visits: 3000, conversions: 1398 },
  { name: "Wed", visits: 2000, conversions: 9800 },
  { name: "Thu", visits: 2780, conversions: 3908 },
  { name: "Fri", visits: 1890, conversions: 4800 },
  { name: "Sat", visits: 2390, conversions: 3800 },
  { name: "Sun", visits: 3490, conversions: 4300 },
];
