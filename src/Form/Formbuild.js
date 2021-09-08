import React, { useState } from 'react'

function Formbuild() {
    const [title,setTitle] = useState("");
    const [titleErr,settitleErr] = useState(false)
    const [fname,setFname] = useState("");
    const [fnameErr,setfnameErr] = useState(false)
    const [lname,setLname] = useState("");
    const [lnameErr,setLnameErr] = useState(false);
    const [address,setAddress] = useState("");
    const [addErr,setaddErr] = useState(false);
    const [dob,setDob] = useState("");
    const [dobErr,setdobErr] = useState(false);
    const [lang,setLang] = useState("");
    const [langErr,setlangErr] = useState(false);


   function submitHandle(e)
    {
        if(fname == " " || lname == "" || address ==" " || dob == " " )
        {
            alert("Please fill this Fields");
        }
        else{
            alert("all good");
        }
        e.preventDefault()
    }

    function nameHandler(e)
    {
        let item = e.target.value;
        if(item.length<3)
        {
            setfnameErr(true)
        }
        else{
            setfnameErr(false)

        }
        setFname(item);

    }

    function lnameHandler(e)
    {
        let item= e.target.value;
        if(item.length<3)
        {
            setLnameErr(true)
        }
        else{
            setLnameErr(false)

        }
        setLname(item)

    }

    function addHandler(e)
    {
        let item= e.target.value;
        if(item.length<3)
        {
            setaddErr(true)
        }
        else{
            setaddErr(false)

        }
        setAddress(item)

    }

    function dobHandler(e)
    {
        let item= e.target.value;
        if(item.length<3)
        {
            setdobErr(true)
        }
        else{
            setdobErr(false)

        }
        setDob(item)

    }

    function langHandler(e)
    {
        let item= e.target.value;
        if(item.length<3)
        {
            setlangErr(true)
        }
        else{
            setlangErr(false)

        }
        setLang(item)

    }
    return (
        <form onSubmit={submitHandle}>

        <div class="container register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p></p><br /><br />
                </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading"><b>Apply as a Employee</b></h3>
                                <div class="register-form">
                                    <div class="col-md-12">
                                        <div class="row mb-3">
                                            <label class="col-sm-3 col-form-label label"><b>Title</b><span style={{ color: "red" }}>*</span></label>
                                            <select class=" col form-select form-control" >
                                                <option selected>Select</option>
                                                <option value="1">Mr</option>
                                                <option value="2">Mrs</option>
                                                <option value="3">Miss</option>
                                            </select>
                                        </div>
                                        <div class="row mb-3">
                                            <label class="col-sm-3 col-form-label"><b>Name</b><span style={{ color: "red" }}>*</span></label>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={nameHandler}/>{fnameErr?<span style={{color:"red"}}>Name Not Valid</span>:""}
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={lnameHandler}/>{lnameErr?<span style={{color:"red"}}>Name Not Valid</span>:""}
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label class="col-sm-3 col-form-label field"><b>Address</b><span style={{ color: "red" }}>*</span></label>
                                            <div class="col-sm-9">

                                                <textarea class="col-sm-9 form-control" onChange={addHandler}></textarea>{addErr?<span style={{color:"red"}}>Name Not Valid</span>:""}
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label class="col-sm-3 col-form-label field" ><b>Date of Birth</b><span style={{ color: "red" }}>*</span></label>
                                            <div class="col-sm-9">
                                                <input type="date" class="form-control" onChange={dobHandler}/>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label class="col-sm-3 col-form-label"><b>Gender</b><span style={{ color: "red" }}>*</span></label>
                                            <div class="col-sm-9">
                                                <label class="radio inline">
                                                    <input type="radio" name="gender" value="male" checked />
                                                    <span> Male </span>
                                                </label>&nbsp;&nbsp;&nbsp;
                                                <label class="radio inline">
                                                    <input type="radio" name="gender" value="female" />
                                                    <span> Female </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label class="col-sm-3 col-form-label"><b>Select Language</b><span style={{ color: "red" }}>*</span></label>

                                            <div class="col-sm-9">
                                                <div class="form-check" onChange={langHandler}>
                                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label class="form-check-label" for="gridCheck1">HTML</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label class="form-check-label" for="gridCheck1">JavaScript</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label class="form-check-label" for="gridCheck1">React Js</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label class="form-check-label" for="gridCheck1">React Native</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label class="form-check-label" for="gridCheck1">Node Js</label>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="submit" class="btnRegister" value="Share" style={{ width: 200 }} />
                                        <input type="submit" class="btnRegister" value="Submit" style={{ width: 200 }} />



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        </div>
        </form>

    )
}

export default Formbuild