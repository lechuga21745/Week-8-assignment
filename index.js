class item {
    constructor(name, aisle) {
        this.name = name;
        this.aisle = aisle
    }
    
    describe() {
        return `${this.name} plays ${this.aisle}.`;
    }
}
 
class groceries {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    additem(item) {
        if (item instanceof item) {
            this.items.push(item);
        } else {
            throw new Error(`You can only add an instance of item. Argument is not a item: ${item}`);
        }
        }
    

    describe() {
        return `${this.name} has ${this.items.length} items.`;  
    }
}

class Menu {
    constructor() {
        this.groceriess = [];
        this.selectedgroceries = null;
    }
start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1':
                this.creategroceries ();
                break;
            case '2':
                this.viewgroceries();
                break;
            case '3':
                this.deletegroceries();
                break;
            case '4':
                this.displaygroceriess();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert ('Goodbye!');
}
showMainMenuOptions() {
    return prompt(`
    0)exit
    1) create new groceries
    2) view groceries
    3) delete groceries
    4)display all groceriess
    `);
}

    showgroceriesMenuOptions(groceriesInfo) {
        return prompt(`
        0)back
        1)create item
        2) delete item
        --------------------------
        ${groceriesInfo}
        `);
    }

    displaygroceriess() {
        let groceriesString = '';
        for (let i = 0; i < this.groceriess.length; i++) {
            groceriesString += i + ') ' + this.groceriess [i].name + '\n';
        }
        alert(groceriesString);
    }


creategroceries() {
    let name = prompt('Enter name for new groceries:');
    this.groceriess.push(new groceries(name));
}

viewgroceries () {
    let index = prompt('Enter the index of the groceries you wish to view:');
    if (index > -1 && index < this.groceriess.length) {
        this.selectedgroceries = this.groceriess[index];
    let description = 'groceries Name: ' + this.selectedgroceries.name + '\n';

    for (let i = 0; i < this.selectedgroceries.items.length; i++) {
        description += i + ') ' + this.selectedgroceries.items[i].name 
        + ' - ' + this.selectedgroceries.items[i].aisle + '\n';
    }
    let selection = this.showgroceriesMenuOptions (description);
    switch (selection) {
        case '1':
            this.createitem();
            break;
        case '2':
            this.deleteitem();
    }
    }
}

deletegroceries() {
    let index = prompt('Enter the index of the groceries you wish to delete:');
    if (index > -1 && index < this.groceriess.length) {
        this.groceriess.splice(index,1);
    }
}
createitem() {
    let name = prompt('Enter name for new item:');
    let aisle = prompt('Enter aisle for new item:')
    this.selectedgroceries.items.push(new item(name, aisle));
}

deleteitem() {
    let index = prompt('Enter the index of the item you wish to delete:');
    if (index > -1 && index < this.selectedgroceries.items.length) {
        this.selectedgroceries.items.splice(index, 1);
    }
}
}


let menu = new Menu();
menu.start();
