import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#F37FAC",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo2.png",
  fullDecal: "./mesh.png",
});

export default state;
