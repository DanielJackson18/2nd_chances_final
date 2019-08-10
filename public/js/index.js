var lineItems = [];

class UI {
    
    static displayAnimals(j) {
        console.log(j);
        if (document.querySelector(".animals") != null) {
            document.querySelector(".animals").innerHTML = "<div id='card'> </div>";
        }
        //Set params as variables
        let k = lineItems[j];
        let
            type = k.type,
            breed = k.breed,
            sex= k.sex,
            age = k.age,
            size = k.size,
            color = k.color;
            

        const animals = document.querySelector(".animals");
        const card_body = document.createElement('card-body');
        card_body.innerHTML = `
            <p class="text-center">${type}</p>
            <p class="text-center">${breed}</p>
            <p class="text-center">${sex}</p>
            <p class="text-center">${age}</p>
            <p class="text-center">${size}</p>
            <p class="text-center">${color}</p>
            `
        animals.appendChild(card_body);
    };
    static addToList(type2, breed2, sex2, age2, size2, color2,j) {

        let type = type2;
        let breed = breed2;
        let sex = sex2;
        let age = age2;
        let size = size2;
        let color = color2;
        const list = document.querySelector('#search-list');
        
        const row = document.createElement('tr');
      
        row.onclick = function(e) {

            }
            //.addEventListener('click', function(){ alert('blah');}, false);

        $(row).data("type", type);
        $(row).data("breed", breed);
        $(row).data("sex", sex);
        $(row).data("age", age);
        $(row).data("size", size);
        $(row).data("color", color);
        
        //add columns to table
        row.innerHTML = `
        <td onclick="UI.showanimals(this)" id="r_` + j.toString() + `">${type}</td>
        <td>${breed}</td>
        <td onclick="deleteanimals(this)" class="btn btn-outline-danger btn-lg delete">Don't like this place</td> 
        `;
        list.appendChild(row);
    }
    static showanimals(el) {

        openNav();
        UI.displayanimals(parseInt(el.id.replace("r_", "")));
    }

    //Delect Location
    static deleteAnimals(element) {
        if (element.classList.contains('delete')) {
            //targets the parentelement of class (delete) which is <td>
            //We need to remove the whole row, so another parentElement which is <tr>
            element.parentElement.remove();
        }
    }
    //Clears the input fields after clicking submit
    static clearFields() {
 
        document.querySelector('#animals').value = '';
    };
    //Show Validation Message when inputs are invalid
    static validateMessage(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#search-form');
        container.insertBefore(div, form);
        //Set timeout so it does not stay on the screen
        //set for 3s
        setTimeout(() => document.querySelector('.alert').remove(),
            3000)
    };
};

function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};