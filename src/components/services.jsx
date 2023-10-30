import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container overlay">
        <div className="section-title">
          <h2>Consultate</h2>
          <p>
            Contacta uno de nuestros chamanes para una consulta gratuita.
          </p>
        </div>
        <div className="row">
          {props.data
            && props.data.map((d, i) => (
                <div key={i} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};
