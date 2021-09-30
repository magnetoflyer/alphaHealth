import users from './user';

export const validateUser=(user)=>{
    const userName = user.userName;
    const userPass = user.userPass;

    if (!userName || !userPass){
        return false;
    }
    const userRecord = users[userName];
    if (!userRecord){
        return false;
    }
    return ( 
        userRecord.username===userName && userRecord.password===userPass
    )
}

export default validateUser;