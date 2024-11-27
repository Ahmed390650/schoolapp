import { calendarEventType, menuItemsType } from "./Type";

const MENU: menuItemsType[] = [
  {
    icon: "/home.png",
    label: "Home",
    href: "/",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/teacher.png",
    label: "Teachers",
    href: "/list/teachers",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/student.png",
    label: "Students",
    href: "/list/students",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/parent.png",
    label: "Parents",
    href: "/list/parents",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/subject.png",
    label: "Subjects",
    href: "/list/subjects",
    visible: ["admin"],
  },
  {
    icon: "/class.png",
    label: "Classes",
    href: "/list/classes",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/lesson.png",
    label: "Lessons",
    href: "/list/lessons",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/exam.png",
    label: "Exams",
    href: "/list/exams",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/assignment.png",
    label: "Assignments",
    href: "/list/assignments",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/result.png",
    label: "Results",
    href: "/list/results",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/attendance.png",
    label: "Attendance",
    href: "/list/attendance",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/calendar.png",
    label: "Events",
    href: "/list/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/message.png",
    label: "Messages",
    href: "/list/messages",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/announcement.png",
    label: "Announcements",
    href: "/list/announcements",
    visible: ["admin", "teacher", "student", "parent"],
  },
];
const OTHER: menuItemsType[] = [
  {
    icon: "/profile.png",
    label: "Profile",
    href: "/profile",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/setting.png",
    label: "Settings",
    href: "/settings",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/logout.png",
    label: "Logout",
    href: "/logout",
    visible: ["admin", "teacher", "student", "parent"],
  },
];
export const menuItems = [
  {
    title: "MENU",
    items: MENU,
  },
  {
    title: "OTHER",
    items: OTHER,
  },
];

export const calendarEvents: calendarEventType[] = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 7, 12, 8, 0),
    end: new Date(2024, 7, 12, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 12, 9, 0),
    end: new Date(2024, 7, 12, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 12, 10, 0),
    end: new Date(2024, 7, 12, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 12, 11, 0),
    end: new Date(2024, 7, 12, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 7, 12, 13, 0),
    end: new Date(2024, 7, 12, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 12, 14, 0),
    end: new Date(2024, 7, 12, 14, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 13, 9, 0),
    end: new Date(2024, 7, 13, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 13, 10, 0),
    end: new Date(2024, 7, 13, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 13, 11, 0),
    end: new Date(2024, 7, 13, 11, 45),
  },

  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 13, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 7, 14, 8, 0),
    end: new Date(2024, 7, 14, 8, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 14, 10, 0),
    end: new Date(2024, 7, 14, 10, 45),
  },

  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 7, 14, 13, 0),
    end: new Date(2024, 7, 14, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 14, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 15, 9, 0),
    end: new Date(2024, 7, 15, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 15, 10, 0),
    end: new Date(2024, 7, 15, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 15, 11, 0),
    end: new Date(2024, 7, 15, 11, 45),
  },

  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 15, 14, 0),
    end: new Date(2024, 7, 15, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 7, 16, 8, 0),
    end: new Date(2024, 7, 16, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 16, 9, 0),
    end: new Date(2024, 7, 16, 9, 45),
  },

  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 16, 11, 0),
    end: new Date(2024, 7, 16, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 7, 16, 13, 0),
    end: new Date(2024, 7, 16, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 16, 14, 0),
    end: new Date(2024, 7, 16, 14, 45),
  },
];
