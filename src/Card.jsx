function Card(props) {
  const { imgSrc, href, imgAlt } = props;

  return (
    <div className="flex justify-center p-4">
      <a href={href}>
        <div className="flex flex-col p-8 justify-center border border-pink-200 rounded-md shadow-2xl">
          <img className="w-80" src={imgSrc} alt={imgAlt} />
          <h5 className="text-xl font-bold tracking-tight text-pink-700">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-pink-700">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
         
          
        </div>
      </a>
    </div>
  );
}

export default Card;