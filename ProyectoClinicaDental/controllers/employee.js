// EmpleadoController
const Sequelize = require("sequelize").Sequelize;
const employee = require("../models/employee");
const employeeModel = require("../models/employee");
const roleController = require("./rol");

// Add employee
exports.addEmployee = async (employeeData) => {
  try {
    const answer = await employeeModel.create(employeeData);
  } catch (err) {
    console.log(err);
  }
};

//Get employee
exports.getEmployee = async (id) => {
  const employee = await employeeModel.findOne({ where: { id_employee: id } });
  if (employee === null) {
    console.log("Not Found!");
  } else {
    console.log(employee.name);
  }
};

// Trea todos los empleados
exports.getEmployees = async () => {
  try {
     const result = await employeeModel.findAll();
     console.log(JSON.stringify(result, null, 2))
  } catch (error) {
     console.log(error);
  }
}

// Funcion para obtener el nombre del rol en base su id
exports.getUserRoleEmployee = async (id) => {
  const employee = await employeeModel.findOne({ where: { id_employee: id } });
  if (employee === null) {
    console.log("Not Found!");
  } else {
    const answer = employee.id_userRole;
    // Llama a las funciones exportadas desde rol.js
    const result = await roleController.getRol(answer);
    console.log(result);
  }
};


// Recibe de parametros el id a modificar, y un objeto con la informacion a actualizar
// Update Employee
exports.updateEmployee = async (id, updatedData) => {
    try {
        // Utiliza el método 'update' para actualizar los datos del empleado
        const [rowsUpdated] = await employeeModel.update(updatedData, {
            where: { id_employee: id },
        });

        if (rowsUpdated === 0) {
            console.log('No se encontró el empleado para actualizar.');
        } else {
            console.log(`Empleado con ID ${id} actualizado exitosamente.`);
        }
    } catch (error) {
        console.log('Error al actualizar el empleado:', error);
    }
}


// Delete Employee
exports.deleteEmployee = async (id) => {
  try {
    const employeeDelete = await employeeModel.destroy({
      where: { id_employee: id },
    });
    console.log(employeeDelete);
  } catch (error) {
    console.log(error);
  }
};

exports.updateEmployeeIdSpecialty = async (id, updatedData) => {
  try {
      // Utiliza el método 'update' para actualizar los datos del empleado
      const [rowsUpdated] = await employeeModel.update(updatedData, {
          where: { id_employee: id },
      });

      if (rowsUpdated === 0) {
          console.log('No se encontró el empleado para actualizar.');
      } else {
          console.log(`Empleado con ID ${id} actualizado exitosamente.`);
      }
  } catch (error) {
      console.log('Error al actualizar el empleado:', error);
  }
}