import React from "react";

function Todolis() {
  return (
    <div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter person name (3-20 Char only)"
        />

        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Enter a valid email id"
        />
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Enter a valid mobileno"
        />

        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Enter a project Name (3-20 Char and number only)"
        />

        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Enter task description (3-30 Char/Num/Spl Char also)"
        />
        <input
          type="date"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Start Date"
        />
        <input
          type="date"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Target Date"
        />

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckIndeterminate"
          />
          <label class="form-check-label" for="flexCheckIndeterminate">
            planned
          </label>

          <div class="input-group">
            <div class="input-group-text">
              <input
                class="form-check-input mt-0"
                type="radio"
                value=""
                aria-label="Radio button for following text input"
              />
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with radio button"
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
              planned
            </label>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-start">
          <div type="radio" class="col"  aria-label="Text input with radio button" ><label class="form-check-label" for="flexCheckIndeterminate">
              planned
            </label></div>
          <div class="col">One of three columns</div>
          <div class="col">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

export default Todolis;
