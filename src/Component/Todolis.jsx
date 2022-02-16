import React,{useState} from "react";


const Todolis=()=> {
  const[userRegistration,setuserRegistration]=useState({
            userName:"",
            emailId:"",
            mobileNo:"",
            ProjectName:"",
            taskDescription:"",
            stDate:"",
            targetDate:"",
  }); 
  const [records,setRecords]=useState([]);
  const handleAddFormChange =(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    console.log(name,value);

    setuserRegistration({ ...userRegistration, [name] : value});
   }
   const handleSubmit = (e) => {
     e.preventDefault();
    //    console.log(records); 

     const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
    setRecords([...records,newRecord]);
    console.log(records);
   }
   return (
    <div>
      <h1 style={{textAlign:"center"}} >TodoList</h1>
       <form action="" submit={handleSubmit} style={{marginLeft:"360px"}} > 
      <div style={{marginRight:"360px"}}>
      <br/>
       <input
         type="text"
          className="form-control"
          name="userName"
          placeholder="Enter person name (3-20 Char only)"
          value={userRegistration.userName}
           onChange={handleAddFormChange}
          />

        <br/> 
         <div className="row g-3">
          <div className="col-md-6">
            <input
              type="email"
              name="emailId"
              className="form-control"
              placeholder="Enter a valid Email id"
              value={userRegistration.emailId}
             onChange={handleAddFormChange}
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="mobileNo"
              className="form-control"
              placeholder="Enter a valid Mobileno"
              value={userRegistration.mobileNo}
              onChange={handleAddFormChange}
            />
            <br/>
          </div>
        </div>
        <input
          type="text"
          name="ProjectName"
          className="form-control"
        
          placeholder="Enter a project Name (3-20 Char and number only)"
          value={userRegistration.ProjectName}
          onChange={handleAddFormChange}
        />
        <br/> 
        <input
          type="text"
          name="taskDescription"
          className="form-control"
          
          placeholder="Enter task description (3-30 Char/Num/Spl Char also)"
          value={userRegistration.taskDescription}
          onChange={handleAddFormChange}
        />
        <br/>
        <div className="row">
          <div className="col">
            <input type="date" name="stDate" className="form-control" placeholder="Start Date" 
            value={userRegistration.stDate}
            onChange={handleAddFormChange}
            />
          </div>
          <div className="col">
            <input type="date" name="ttDate" className="form-control" placeholder="Target Date" 
            value={userRegistration.targetDate}
            onChange={handleAddFormChange}
             />
          </div>
        </div>
        <br/> 
         <div>  
        <div className="form-check form-check-inline">
        <div className="col-md-2"><h6>Task Status</h6></div>
  <input className="form-check-input" type="radio" name="inlineRadioOptions"  value="option1"/>
  <label class="form-check-label" for="inlineRadio1" >Planned</label>
</div>
<div className="form-check form-check-inline">
  <input classNmae="form-check-input" type="radio" name="inlineRadioOptions"  value="option2"/>
  <label className="form-check-label" for="inlineRadio2">In-Progress</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions"  value="option3"/>
  <label className="form-check-label" for="inlineRadio2">Done</label>
</div>
</div> 

 <div className="" style={{textAlign:"center"}}> 
<button type="submit" className="btn btn-primary btn-sm">Save</button>

<button type="button" className="btn btn-danger btn-sm">Clear</button>


</div>
</div>

      
      </form >
      <div >
      <table className="table mt-3 col-md-8 "  >
        <thead >
          <tr >
            <th>Slno</th>
            <th>Name</th>
            <th>Email-id</th>
            <th>Mobile-no</th>
            <th>Project-Name</th>
            <th>Task-Description</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>TaskStatus</th>
          </tr>
        </thead>
        <tbody>
         {
           records.map((curElem) =>{
             return(
               <tr>
                 <td>{curElem.userName}</td>
               </tr>
             )
           })
         }
      </tbody>
      </table>
      </div>
    </div>
  );
}

export default Todolis;
