import React from 'react';

export default function Alert({ alert }) {
  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return (
    <>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '10' }} role="alert">
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </>
  );
}
