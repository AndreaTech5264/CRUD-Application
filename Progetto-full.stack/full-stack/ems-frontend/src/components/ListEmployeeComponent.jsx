import React , {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees, setEmployees]= useState([])   
   const navigator = useNavigate();

   /*useState restituisce un array con due elementi: il valore corrente 
   dello stato e una funzione per aggiornarlo. Questo aiuta a gestire lo stato 
   interno dei componenti e facilita la creazione di interfacce utente reattive.*/

   useEffect(() => {
    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    })
}, []);

function addNewEmployee(){
navigator('/add-employee')
}

function updateEmployee(id) {
    navigator (`/edit-employee/${id}`)
}

  return (
    <div className='container'>
        <h2 className='text-center'> Lista di dipendenti </h2>

        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Aggiungi dipendente </button>
        
        <table className='table table-striped table-bordered'> 
            <thead>
                <tr>
                    <th> Id dipendente</th>
                    <th> Dipendente nome</th>
                    <th> Dipendente cognome </th>
                    <th> Dipendente email </th>
                    <th> Azioni </th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                    <tr key={employee.id}>
                        <td> {employee.id} </td> 
                        <td> {employee.firstName}</td>
                        <td> {employee.lastName}</td>
                        <td> {employee.email}</td>
                        <td> 
                            <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}> Aggiorna </button>
                        </td>

                    </tr>)
                }


            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent