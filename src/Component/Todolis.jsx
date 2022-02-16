import React,{useState,Fragment} from "react";


// const[data,setData]=useState("")
function Todolis() {
   const[name,setName]=useState("");
   const [storeEnter,setStoreEnter] = useState("");
   console.log(name);
   const store=(e)=>{
     e.preventDefault();
     const newData={name:name}
     setStoreEnter([...storeEnter,newData])
     console.log(storeEnter);
   }
  return (
    <div>
      <h1 style={{textAlign:"center"}} >TodoList</h1>
      <form onSubmit={store} style={{marginLeft:"360px"}}>
      <div style={{marginRight:"360px"}}>
      <br/>
       <input
         type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter person name (3-20 Char only)"
          // onChange={handleAddFormChange}
          
          // onChange={e=>setName(e.target.value)}
          />

        <br/> 
         <div className="row g-3">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter a valid Email id"
              // onChange={handleAddFormChange}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Enter a valid Mobileno"
              // onChange={handleAddFormChange}
            />
            <br/>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput4"
          placeholder="Enter a project Name (3-20 Char and number only)"
          // onChange={handleAddFormChange}
        />
        <br/> 
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput4"
          placeholder="Enter task description (3-30 Char/Num/Spl Char also)"
          // onChange={handleAddFormChange}
        />
        <br/>
        <div className="row">
          <div className="col">
            <input type="date" className="form-control" placeholder="Start Date" 
            // onChange={handleAddFormChange}
            />
          </div>
          <div className="col">
            <input type="date" className="form-control" placeholder="Target Date" 
            //  onChange={handleAddFormChange}
             />
          </div>
        </div>
        <br/> 
         <div>  
        <div class="form-check form-check-inline">
        <div className="col-md-2"><h6>Task Status</h6></div>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1" >Planned</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">In-Progress</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio2">Done</label>
</div>
</div> 

 <div className="" style={{textAlign:"center"}}> 
<button type="button" class="btn btn-primary btn-sm">Save</button>

<button type="button" class="btn btn-danger btn-sm">Clear</button>


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
            storeEnter?storeEnter.map((ele)=>{
            return <tr>
              <td>{ele.name}</td>
            </tr>  
            }):null
          }

        
              

          
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Todolis;
