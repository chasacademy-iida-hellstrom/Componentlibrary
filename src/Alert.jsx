

    const styles = {

        color: {
           info: "bg-pink-300",
           failure: "bg-blue-300",
           
        },
    };

    
export default function Alert({ children, color, icon, onDismiss }) {
    

    return (
        <div
          className={`${styles.color[color]} flex rounded-xl w-[450px] px-8 py-2 
          items-center justify-between`}>
          {icon !== undefined && <div className='mr-6'>{icon}</div>}
          <div>{children}</div>
          {onDismiss !== '' && <button onClick={() => alert(onDismiss)}>X</button>}
        </div>
      );
    }