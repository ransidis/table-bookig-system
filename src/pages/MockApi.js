export function fetchAPI(date) {
  
    const mockData = { 
  '2024-01-01': ['08:00 AM', '01:00 PM', '05:00 PM'],
  '2024-01-02': ['10:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-03': ['08:00 AM', '12:00 PM', '03:00 PM'],
  '2024-01-04': ['11:00 AM', '01:00 PM', '05:00 PM'],
  '2024-01-05': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-06': ['10:00 AM', '01:00 PM', '03:00 PM'],
  '2024-01-07': ['08:00 AM', '12:00 PM', '02:00 PM'],
  '2024-01-08': ['11:00 AM', '03:00 PM', '05:00 PM'],
  '2024-01-09': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-10': ['10:00 AM', '01:00 PM', '03:00 PM'],
  '2024-01-11': ['08:00 AM', '12:00 PM', '02:00 PM'],
  '2024-01-12': ['11:00 AM', '03:00 PM', '05:00 PM'],
  '2024-01-13': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-14': ['10:00 AM', '01:00 PM', '03:00 PM'],
  '2024-01-15': ['08:00 AM', '12:00 PM', '02:00 PM'],
  '2024-01-16': ['11:00 AM', '03:00 PM', '05:00 PM'],
  '2024-01-17': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-18': ['10:00 AM', '01:00 PM', '03:00 PM'],
  '2024-01-19': ['08:00 AM', '12:00 PM', '02:00 PM'],
  '2024-01-20': ['11:00 AM', '03:00 PM', '05:00 PM'],
  '2024-01-21': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-22': ['10:00 AM', '01:00 PM', '03:00 PM'],
  '2024-01-23': ['08:00 AM', '12:00 PM', '02:00 PM'],
  '2024-01-24': ['11:00 AM', '03:00 PM', '05:00 PM'],
  '2024-01-25': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-26': ['10:00 AM', '01:00 PM', '03:00 PM'],
  '2024-01-27': ['08:00 AM', '12:00 PM', '02:00 PM'],
  '2024-01-28': ['11:00 AM', '03:00 PM', '05:00 PM'],
  '2024-01-29': ['09:00 AM', '02:00 PM', '04:00 PM'],
  '2024-01-30': ['10:00 AM', '01:00 PM', '03:00 PM'],
    };
  
    const formattedDate = date.split('T')[0];
    return Promise.resolve(mockData[formattedDate] || []);
  }
  
  export function submitAPI(formData) {
    return Promise.resolve(true);
  }
  