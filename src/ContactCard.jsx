import React, {useState} from "react";

const ContactCard = ({avatarUrl,name,lastName,email,age}) => {
    const [showAge, setShowAge] = useState(false);

    const toggle = ()=> setShowAge(!showAge)


  return (
    <div className="contact-card">
      <img src={avatarUrl} alt={name} />
      <div>
        <p>Name: {name}</p>
        <p>lastName: {lastName}</p>
        <p>Email: {email}</p>
        <button onClick={toggle}>{showAge?"close age":"show age"}</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
