import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
    return {
        ...employeesList,
        getNumberOfDepartments(employeesList) {
            let cnt = 0;
            for (const i in employeesList){
                cnt++;
            }  
            return cnt;
        }
    }
}
const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
