import React, { useState, useRef, useEffect } from "react";

function FormInfor(props) {
  const initializa = {
    name: "",
    studentCode: "",
    major: "",
    address: "",
    phone: null,
  };

  
  const [infor, setInfor] = useState({
    name: "1",
    studentCode: "1",
    major: "1",
    address: "1",
    phone: null,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    console.log(e)


    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);

    const newInfor = {id, ...infor};
    setInfor(newInfor);
  };

  const handleChange = (e) => {
    console.log(e.target.name)
    const infor2 = {...infor, [e.target.name] : e.target.value}
    setInfor(infor2);
  };

  console.log(infor);

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Add Information Student <i className="fas fa-plus"></i>
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Input Information Form
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nguyễn Văn A"
                        value={infor.name}
                        onChange={handleChange}
                        //ref={inputRef}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="id">Student Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="studentCode"
                        placeholder="K43.104.xxx"
                        value={infor.id}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="major">Major</label>
                    <input
                      type="text"
                      className="form-control"
                      name="major"
                      placeholder="Công nghệ thông tin..."
                      value={infor.major}
                      onChange={handleChange}
                      ref={inputRef}
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="42/1 Ung Văn Khiêm..."
                      value={infor.address}
                      onChange={handleChange}
                      ref={inputRef}
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputPhone">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      placeholder="099405xxx"
                      value={infor.phone}
                      onChange={handleChange}
                      ref={inputRef}
                    />
                  </div>

                  <button className="btn btn-primary" type='submit'>ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInfor;
