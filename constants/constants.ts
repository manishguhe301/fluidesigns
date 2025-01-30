import Attendance from "@/components/icons-as-components/Attendance"
import Building from "@/components/icons-as-components/Building"
import Calendar from "@/components/icons-as-components/Calendar"
import Home from "@/components/icons-as-components/Home"
import User from "@/components/icons-as-components/User"



export const NAV_MENU = [
  {
    menuItem: 'Home',
    icon: Home
  },
  {
    menuItem: 'Attendance',
    icon: Attendance
  }, {
    menuItem: 'Leave',
    icon: Calendar
  }, {
    menuItem: 'Company Details',
    icon: Building
  }, {
    menuItem: 'Profile Settings',
    icon: User
  }
]

export type LEAVE_TABLE_DATA_TYPE = {
  leaveType: string,
  from: string,
  to: string,
  reason: string,
  status: string
}

export const LEAVE_TABLE_DATA: LEAVE_TABLE_DATA_TYPE[] = [
  {
    leaveType: 'Casual Leave',
    from: '29-06-2023',
    to: '29-06-2023',
    reason: 'Wedding',
    status: 'Approved'
  },
  {
    leaveType: 'Sick Leave',
    from: '05-07-2023',
    to: '07-07-2023',
    reason: 'Fever and cold',
    status: 'Pending'
  },
  {
    leaveType: 'Paid Leave',
    from: '12-08-2023',
    to: '14-08-2023',
    reason: 'Family Function',
    status: 'Approved'
  },
  {
    leaveType: 'Emergency Leave',
    from: '19-09-2023',
    to: '19-09-2023',
    reason: 'Medical Emergency',
    status: 'Rejected'
  },
  {
    leaveType: 'Maternity Leave',
    from: '01-10-2023',
    to: '31-12-2023',
    reason: 'Childbirth',
    status: 'Rejected'
  },
  {
    leaveType: 'Annual Leave',
    from: '15-11-2023',
    to: '22-11-2023',
    reason: 'Vacation',
    status: 'Approved'
  },
  {
    leaveType: 'Compensatory Leave',
    from: '05-12-2023',
    to: '06-12-2023',
    reason: 'Compensation',
    status: 'Pending'
  }
];
