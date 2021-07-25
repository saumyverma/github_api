import react from 'react';

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`} role="alert" >
                {alert.msg}
            </div >

        )
    )


}

export default Alert;