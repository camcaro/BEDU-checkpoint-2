// Constructors
class Employee {
    constructor(name, department, salary) {
        this._name = name;
        this._department = department;
        this._salary = salary;
    }
    getName() {
        return this._name;
    }
    getSalary() {
        return this._salary;
    }
    getDepartment() {
        return this._department;
    }
}

class Company {
    constructor(name) {
        this._name = name;
        this._employeeList = [];
    }
    getemployeeList() {
        return this._employeeList;
    }
    addEmployee(name, department, salary) {
        this._employeeList.push(new Employee(name, department, salary));
    }
    calculatePayroll(departmentName) {
        let payrollTotal;
        if(departmentName){
            // console.log(this._listaEmpleados.filter((empleado) => empleado.getArea() === areaNom));
            // .reduce((total, empleado) => total += empleado.getSueldo(),0);
            payrollTotal = this._employeeList
                .filter((employee) => employee.getDepartment() === departmentName)
                .reduce((total, employee) => total += employee.getSalary(),0);
            console.log("Not all areas $" + payrollTotal);
        } else {
            payrollTotal = this._employeeList
            .reduce((total, employee) => total += employee.getSalary(),0);
            console.log("All areas $" + payrollTotal);
        }
        return payrollTotal;
    }
}

// End Constructors

//Example initial load
let comp = new Company("Cerveceria Latina");
comp.addEmployee('Carlos', 'Management', 5000);
comp.addEmployee('Daniel', 'Sales', 8000);
comp.addEmployee('Bernardo', 'Sales', 6000);
comp.addEmployee('Vero', 'Administration', 9000);
comp.addEmployee('Diego', 'Production', 11000);
comp.addEmployee('Vane', 'Production', 8000);

// console.log(comp);
// console.log(comp.calculatePayroll());
// console.log(comp.calculatePayroll('Sales'));

const employeeTable = document.getElementById("employeeTable");

// console.log(comp.getemployeeList().map((employee) => employee.getName()));
let list = comp
    .getemployeeList()
    .map((employee) => employeeTable.innerHTML += `
        <tr>
            <td>${employee.getName()}</td>
            <td>${employee.getDepartment()}</td>
            <td>$${employee.getSalary()}</td>
            <td>
                <button id="${employee.getName()}from${employee.getDepartment()}EditSalaryButton">Edit Salary</button>
            </td>
            <td>
                <button id="${employee.getName()}from${employee.getDepartment()}RemoveButton" class="removeButton">Remove</button>
            </td>
        </tr>`);

const CalculatePayroll = () => {
    let dept = prompt("Department to calculate payroll: ");
    console.log(dept)
    if(dept) {
        return `Payroll total for the ${dept} department is ${comp.calculatePayroll(dept)}`;
    } else return `Payroll total for all departments is ${comp.calculatePayroll(dept)}`
}

// const AddEmployee = () => {
//     let employeeName = prompt("Input new Employee name: ")
//     let employeeDepartment = prompt("Department: ")
//     let employeeSalary = prompt("Salary: ")
//     comp.addEmployee(employeeName, employeeDepartment, employeeSalary);
// }

export default CalculatePayroll
// export default AddEmployee