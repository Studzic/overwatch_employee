const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'Wonkity$69',
  database: 'employee_watchers'
});


const startQuestions = require('./utils/inquiries/startQuestions')



function launchTracker() {
  console.log(`
  ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
  ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
  █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
  ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
  ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
  ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                       
        ████████╗██████╗  █████╗  ██████╗██╗  ██╗███████╗██████╗             
        ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗            
           ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝            
           ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗            
           ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║            
           ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝            
                                    
`);
startQuestions(connection);
}



launchTracker();