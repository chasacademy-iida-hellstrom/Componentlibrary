

export default function Modal(props) {
    const styles = {
      size: {
        small: 'md:w-[200px] w-[400px] min-h-[200px]',
        large: 'md:w-[800px] w-[500px] min-h-[200px]',
      },
    };
    const { show, onClose, children, size } = props;
    const sizeClass = styles.size[size];
    const handleOnclose = (e) => {
      if (e.target.id === "background") onClose();
    };
    if (!show) return null;
    return (
      <div
        id="background"
        onClick={handleOnclose}
        className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      >
        <div
          className={`${sizeClass} flex bg-pink-300 rounded-lg`}
>
         
          <div>
            <p
              className="flex text-xl justify-end items-start cursor-pointer p-2"
              onClick={onClose}>X</p>
            <div className="flex flex-col p-2">{children}</div>
          </div>
        </div>
      </div>
    );
  }
  
  function Header(props) {
    return (
      <div className="text-2xl text-decoration-line: underline">
        <h1>Terms of service</h1>
      </div>
    );
  }
  function Body(props) {
    return (
        <div className="space-y-6">
        <p className="text-base leading-relaxed text-pink-700">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-pink-700">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
    );
  }
  function Footer(props) {
    return (
      <div>
       Got it!
      </div>
    );
  }
  Modal.Header = Header;
  Modal.Body = Body;
  Modal.Footer = Footer;