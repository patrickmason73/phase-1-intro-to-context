// Your code here
function createEmployeeRecord([name, lastName, jobTitle, Number]) {
   let employeeRecord = {}
    return employeeRecord = {
        firstName: name,
        familyName: lastName,
        title: jobTitle,
        payPerHour: parseInt(Number),
        timeInEvents: [],
        timeOutEvents: []
    }    
}
 
function createEmployeeRecords(arrays) {
    
  let employeeRecords = 
        arrays.map(array => {
            return createEmployeeRecord(array)
        })
    return employeeRecords
}


function createTimeInEvent(object, dateStamp) {
     object.timeInEvents = [{
        type: "TimeIn",
        date: dateStamp.slice(0, 10),
        hour: parseInt(dateStamp.slice(11))
     }]
     return object
}

function createTimeOutEvent(object, dateStamp) {
    object.timeOutEvents = [{
        type: "TimeOut",
        date: dateStamp.slice(0, 10),
        hour: parseInt(dateStamp.slice(11))
    }]
    return object
}

function hoursWorkedOnDate(employee, givenDate) {
    const timeIn = employee.timeInEvents.find((e) => {
      return e.date === givenDate
    });
  
    const timeOut = employee.timeOutEvents.find((e) => {
      return e.date === givenDate
    });
  
    return (timeOut.hour - timeIn.hour) / 100;
  }

function wagesEarnedOnDate(employee, givenDate) {
    return (hoursWorkedOnDate(employee, givenDate) * employee.payPerHour)
}

function allWagesFor(employee) {
    
    const wageDates = employee.timeInEvents.map((e) => {
        return e.date
    })
    
    const wage = wageDates.map((date) => {
        return wagesEarnedOnDate(employee, date)
    }, 0);
    return wage.reduce((total, wage) => {
        total + wage
    })
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0)
}