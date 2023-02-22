import { TextureLoader, NearestFilter } from "three";
import { motorXImg,mightyImg,myTineraryImg } from "./images_projects.js"

const motorXTexture = new TextureLoader().load(motorXImg);
const mightyTexture = new TextureLoader().load(mightyImg);
const myTineraryTexture = new TextureLoader().load(myTineraryImg);

motorXTexture.magFilter = NearestFilter;
mightyTexture.magFilter = NearestFilter;
myTineraryTexture.magFilter = NearestFilter;

export { motorXTexture, mightyTexture, myTineraryTexture };