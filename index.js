(async () => {
    const db = require("./db");
    console.log('Começou!');
    
    console.log('insert');
    const result = await db.insertCustomer({ nome:'Zé', idade: 19, uf:'SP' });
    console.log(result);

    console.log('select');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('update');
    const result2 = await db.updateCustomer(10, { nome:'José', idade: 22, uf:'SP' });
    console.log(result2);

    console.log('delete');
    for(let i = 11; i < 18; i++) {
        const result3 = await db.deleteCustomer(i);
        console.log(result3);
    }

})();