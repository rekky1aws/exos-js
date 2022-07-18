var students = ["Alexandre B","Alexandre C","Amandine","Benoit","Donatien","Julian", "Hugo", "Loic","Maxence","Myriam","Nicolas","Quentin F","Quentin R","Steven","Thomas","Tristan","Vlad","Youcef"];

function sortReverseList (list)
{
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i -1; j++) {
            if(list[j] < list[j+1]) {
                let storage = list[j];
                list[j] = list[j+1];
                list[j+1] = storage;
            }            
        }
    }
    return list;
}

function displayList (list)
{
    let main = document.querySelector('main');
    let unordList = document.createElement('ul');
    list.forEach(element => {
        let listElement = document.createElement('li');
        listElement.innerHTML = element;
        unordList.appendChild(listElement);
    });
    main.appendChild(unordList);
}

let sortedStudents = sortReverseList(students);

displayList(sortedStudents);