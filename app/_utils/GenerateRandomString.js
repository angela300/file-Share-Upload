export const generateRandomString = ()=>{
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < 4; i++ ) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}