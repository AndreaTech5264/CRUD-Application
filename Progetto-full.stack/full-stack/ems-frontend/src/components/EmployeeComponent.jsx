import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom';



const EmployeeComponent = () => {

    const [firstName, setFirstName]=  useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const {id} = useParams(); //update dipendente
    const [error,setErrors]= useState({
        firstName:'',
        lastName:'',
        email:''
})

    const navigator =useNavigate();

//SALVATAGGIO DATI
function saveEmployee(e){ e.preventDefault();  
    //verifica validità FORM
   if(validateForm()){
    const employee= {firstName,lastName,email}
    console.log(employee)

    createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator('/employees')
    })

   }
    

}


function handleFirstName(e){ setFirstName(e.target.value);}

function handleLastName(e){ setLastName(e.target.value);}

function handleEmail(e){setEmail(e.target.value);}

//check dati nulli nel form
function validateForm(){
    let valid=true;
    const errorsCopy= {... error}

    if(firstName.trim()){
        errorsCopy.firstName= '';
    } else{
        errorsCopy.firstName= 'Nome richiesto';
        valid= false;

    }

    if (lastName.trim()){
        errorsCopy.lastName='';

    }else{
        errorsCopy.lastName = 'Cognome richiesto'
        valid=false;
    }

    if (email.trim()){
        errorsCopy.email='';
    }else{
        errorsCopy.email='Email richiesta'
        valid=false;
    }
    

setErrors(errorsCopy);
return valid;
}


function pageTitle(){
    if (id){
        return <h2 className='text-center'> Aggiorna dipendente </h2>
    }else {
        return <h2 className='text-center'> Aggiungi dipendente </h2>
    }
}

  return (
    <div className='container'>
        <br/> <br/> 
        <div className='row'>
            <div className="card col-md-4 mx-auto">


                {
                    pageTitle() //dinamico
                }
                

                   

                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'> Nome </label>
                            <input
                                type='text'
                                placeholder='Inserisci nome'
                                name='firstName'
                                value={firstName}  //nome_variabile
                                className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                onChange={handleFirstName}  // cambia valore elemento dato in input
                                >

                                </input>
                                {error.firstName && <div classname='invalid-feedback'> {error.firstName} </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Cognome </label>
                            <input
                                type='text'
                                placeholder='Inserisci  cognome'
                                name='lastName'
                                value={lastName}  //nome_variabile
                                className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                onChange={handleLastName}  // cambia valore elemento dato in input
                                >

                                </input>
                                
                                {error.lastName && <div classname='invalid-feedback'>{error.lastName} </div>   }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Email </label>
                            <input
                                type='text' //se =password -> * * * * *
                                placeholder='Inserisci email'
                                name='email'
                                value={email}  //nome_variabile
                                className={`form-control ${error.email ? 'is-invalid' : ''}`}
                                onChange={handleEmail}  // cambia valore elemento dato in input
                                >

                                </input>
                                {error.email && <div classname='invalid-feedback'> {error.email} </div>   }
                        </div>


                        {/* Funzione JavaScript per salvare effettivamente i dati: saveEmployee,definita prima */}
                        <button className='btn btn-success' onClick={saveEmployee}> Conferma e Salva </button>
                    </form>
                </div>
                </div>  
                </div>
         </div>
  )
}

export default EmployeeComponent