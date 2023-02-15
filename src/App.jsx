import Button from "./Button";
import Alert from "./Alert";
import Badge from "./Badge";
import Modal from "./Modal";
import Card from "./Card";
import { HiInformationCircle } from 'react-icons/hi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useState } from "react";
function App() {
 
  const [openModal, setOpenModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  return (

    
    <>
    <div className="bg-purple-100 m-12 p-4 rounded-2xl">
        <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl underline p-5 text-neutral-600">
          Buttons
        </h1>
    <div className="gap-6 space-x-8">
     <Button title="Primary" color="primary" size="small"/>
     <Button title="Secondary" color="secondary" size="large"/>
     <Button title="Disabled" size="small" disabled />
    </div>
    </div>
    </div>
    
<div className="bg-pink-100 m-12 p-6 rounded-2xl">
<div className="flex flex-col items-center">
<h1 className="font-semibold text-2xl underline p-5 text-neutral-600">
  Alerts
</h1>
<div className="gap-6 space-x-8"></div>
<div className="space-y-8">
<Alert color="info"
icon={<RiErrorWarningLine/>}
 onDismiss={'Alert dismissed'}>

  <span>
    <span className="font-medium text-pink-700">
      Info alert!
    </span>
    {' '}Change a few things up and try submitting again.
  </span>
</Alert>

<Alert
  color="failure"
  icon={<HiInformationCircle/>}
  onDismiss={'Alert dismissed'}
>
  <span>
    <span className="font-medium text-blue-700">
      Info alert!
    </span>
    {' '}Change a few things up and try submitting again.
  </span>
</Alert>

      </div>
</div>
</div>

<div className="bg-purple-100 m-12 p-4 rounded-2xl">
        <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl underline p-5 text-neutral-600">
          Badges
        </h1>
    <div>
    <div className="flex flex-wrap space-x-8  m-2">
  <Badge 
    icon="check"
    color="secondary"
    size="large">
    2 minutes ago
  </Badge>
  <Badge
    icon="clock"
    color="primary"
    size="small"
  >
    3 days ago
  </Badge>
    </div>
    </div>
    </div>
    </div>

    <div className="bg-pink-100 m-12 p-6 rounded-2xl">
<div className="flex flex-col items-center">
<h1 className="font-semibold text-2xl underline p-5 text-neutral-600">
  Card
</h1>
<div className="max-w-sm">
        <Card
          
          imgAlt="Meaningful alt text for an image that is not purely 
          decorative"
          href="https://chasacademy.se/"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
  
          </Card>
          </div>
      </div>
      </div>

      <div className="bg-purple-100 m-12 p-4 rounded-2xl">
        <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl underline p-5 text-neutral-600">
          Modal
        </h1>
         
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-pink-500 hover:bg-pink-300 rounded-lg text-sm px-4 py-2"
          >
            Modal
          </button>
          <Modal
            size="large"
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header />
            <Modal.Body />
            <Modal.Footer />
          </Modal>

          <button
            onClick={() => setOpenModal(true)}
            className= "bg-pink-500 hover:bg-pink-300 rounded-lg text-sm px-4 py-2"
          >
            Anonther Modal
          </button>
          <Modal
            size="small"
            show={openSecondModal}
            onClose={() => setOpenSecondModal(false)}
          >
            <Modal.Header />
            <Modal.Body />
            <Modal.Footer />
          </Modal>
        </div>
  
    </div>
    </div>
   </> 
    

    
  )
}



export default App;
