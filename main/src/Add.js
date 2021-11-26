import React from "react";
import './App.css';




function Add(){
    const AddRemindr = () => {
        var input = document.getElementById('input');
        var RemDiv = document.getElementById('reminders');
        var NewDiv = document.createElement('div');
        document.getElementById('noremp').style.display = 'none';
        NewDiv.style.textAlign = 'center';
        RemDiv.appendChild(NewDiv);
        var Div1 = document.createElement('div');
        Div1.style.width = '70%';
        var name = document.createElement('h3');
        name.style.color = 'white';
        name.innerText = input.value;
        Div1.appendChild(name);
        NewDiv.style.display = 'flex';
        NewDiv.appendChild(Div1);
        var Div2 = document.createElement('div');
        Div2.style.width = '30%';
        NewDiv.appendChild(Div2);
        var DelBtn = document.createElement('button');
        DelBtn.innerHTML = '<i class = "fa fa-trash"></i>';
        Div2.appendChild(DelBtn);
        DelBtn.className = 'del-btn';
        var CheckBtn = document.createElement('button');
        CheckBtn.innerHTML = '<i class = "fa fa-check"></i>';
        CheckBtn.className = 'check-btn';
        Div2.appendChild(CheckBtn);

        CheckBtn.onclick = function (){
            var Div = this.parentElement;
            var MainDiv = Div.parentElement;
            MainDiv.style.display= 'none';
        };
        DelBtn.onclick = function (){
            var Div = this.parentElement;
            var MainDiv = Div.parentElement;
            MainDiv.style.display= 'none';
        };



    }
    return (
        <div className="Add">
            <div className="text">Add Remindr!</div>
            <div className='input'>
                <form>
                    <input type="text" id='input'/>
                </form>
                <div className="add-btn">
                    <button onClick={AddRemindr}><i className='fa fa-plus'></i></button>
                </div>
            </div>
        </div>
    );
}

export default Add;