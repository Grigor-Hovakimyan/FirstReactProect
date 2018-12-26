import Lime from '../images/Lime.png';
import Layer6 from '../images/Layer 6.png';
import Layer7 from '../images/Layer 7.png';
import Layer8 from '../images/Layer 8.png';
import Layer9 from '../images/Layer 9.png';
import Layer10 from '../images/Layer 10.png';
import Nature from '../images/Nature.png';
import People from '../images/People.png';
import Trips from '../images/Trips.png';
import Tech from '../images/Tech.png';
import Fashion from '../images/Fashion.png';

const api = {
    keyName:[
        {number:1,img_1:Lime,img_2:Nature,text:'"Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science.',data:'11 September 2019 | JohnDoe',text1: 'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.'},
        {number:2,img_1:Layer7,img_2:People,text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC',data:'11 September 2019| JohnDoe',text1: 'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.'},
        {number:3,img_1:Layer6,img_2:Tech,text:'The Technological Institute, more commonly known as "Tech", is a landmark building at Northwestern University built from 1940 to 1942.',data:'11 September 2019 | JohnDoe',text1: 'The Technological Institute, more commonly known as "Tech", is a landmark building at Northwestern University built from 1940 to 1942. It is the main building for students and faculty in the Robert R. McCormick School of Engineering and Applied Science. The school of engineering itself was called the Technological Institute before a major gift from the Robert R. McCormick Foundation gave it the present name.'},
        {number:4,img_1:Layer8,img_2:Trips,text:'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ',data:'11 September 2019 | JohnDoe',text1: 'Nature, in the broadest sense, is the natural, physical, or material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.'},
        {number:5,img_1:Layer9,img_2:Trips,text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',data:'11 September 2019 | JohnDoe',text1: 'Fashion is a distinctive and often constant trend in the style in which people present themselves. A fashion can become the prevailing style in behaviour or manifest the newest creations of designers, technologists, engineers, and design managers'},
        {number:6,img_1:Layer10,img_2:Fashion,text:'Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body.',data:'11 September 2019 | JohnDoe',text1: 'Fashion is a distinctive and often constant trend in the style in which people present themselves. A fashion can become the prevailing style in behaviour or manifest the newest creations of designers, technologists, engineers, and design managers'}
    ],
    all:function () {
        return this.keyName;
    },
    get: function(id) {
        const isImage = p => p.number === id;
        return this.keyName.find(isImage);
    }
};
export default api;