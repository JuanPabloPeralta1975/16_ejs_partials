
const mainController = {
    
    index:(req,res) =>{
        return res.render('index');
    },
    
    register:(req,res) =>{
        return res.render('register');
    },
    login:(req,res) =>{
        return res.send('Login');
    },
    list: (req,res) =>{
        let userList = [
            'Juan',
            'Lucy',
            'Cata',
            'Agus'
        ]
               
        res.render('userList', {'userList':userList})
    }
}




module.exports = mainController; 