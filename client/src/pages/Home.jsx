import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <a href="https://hashweb.ca" target="_blank" rel="noreferrer">
              <img
                src="./logo.png"
                alt="logo"
                className="w-36 object-contain hover:md:scale-125"
              />
            </a>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text-pink">3D TEE</h1>
              <br className="xl:block hidden" />
              <h1 className="head-text">DESIGNER.</h1>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-6 mt-5"
              >
                <p className="max-w-md font-normal text-gray-600 text-base">
                  <strong>Experience the Ultimate</strong> Freedom of
                  Expression: Craft Your{" "}
                  <strong>Exclusive 3D Shirt for Free</strong> with Our 3D
                  Cutting-Edge Customization Tool!{" "}
                  <strong>Unleash Your Imagination</strong>, Redefine Your
                  Style, and Dive into a World of{" "}
                  <strong>Limitless Possibilities.</strong>
                </p>
                <CustomButton
                  id="customizationButton"
                  type="outline"
                  title="Begin Customization -->"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-5 py-5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
