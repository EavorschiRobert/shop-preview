import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    <div className="text-xs w-full flex flex-col items-start pl-2 ">
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faLocationDot} />
        <a
          className="hover:text-tertiary"
          href='https://www.google.com/search?q=Mini+market+anastasia+grecia&oq=mini+mar&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRhAMgYIAhBFGDkyCggDEAAYkgMYgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDyoAgCwAgE&sourceid=chrome&ie=UTF-8&lqi=ChxNaW5pIG1hcmtldCBhbmFzdGFzaWEgZ3JlY2lhWh4iHG1pbmkgbWFya2V0IGFuYXN0YXNpYSBncmVjaWGSASxtdW5pY2lwYWxfZGVwYXJ0bWVudF9hZ3JpY3VsdHVyZV9mb29kX3N1cHBseaoBYBABKhkiFW1pbmkgbWFya2V0IGFuYXN0YXNpYSgHMh8QASIbidCKDBNIlBNWDRjMESaKYESAQZPrKkQ7XtkmMiAQAiIcbWluaSBtYXJrZXQgYW5hc3Rhc2lhIGdyZWNpYQ#rlimm=6916107828021261546'>
          Minimarket Anastasia
        </a>
      </div>
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faPhone} />
        
      </div>
    </div>
  );
};

export default Contacts;
