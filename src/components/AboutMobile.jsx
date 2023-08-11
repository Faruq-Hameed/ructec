import { useState } from 'react';
import DownArrow from '../assets/down-arrow.svg';

const ModalItem = ({ title, desc, isFirst }) => {
  const [showModal, setShowModal] = useState(isFirst);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  return (
    <div
      className="sm:flex sm:mt-12 h-full w-full bg-white mb-2 justify-center p-5"
      onClick={handleClick}
    >
      <div className="">
        <div className="flex mx-auto justify-between w-auto p-3 border border-gray-400 rounded items-center group">
          <h2 className="text-xl font-bold text-[#056594]">{title}</h2>
          <div className="group-hover:rotate-18 duration-300">
            <img src={DownArrow} alt="Down Arrow" className="w-8 h-4" />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="w-full h-full bg-[#f5f5f5] text-[#067EB9] font-medium mt-6" onClick={handleClose}
        >
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <ModalItem
        title="About Ruqtec"
        desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail."
        isFirst={true}
      />
      <ModalItem
        title="Our Mission"
        desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. "
      />
      <ModalItem
        title="Our Vision"
        desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. "
      />
    </div>
  );
};

export default App;
