export const handleImage = (img, path)=>{
    const url = path.concat(img)
    console.log("console_path",url)
    const str = require(url)
return str;
}