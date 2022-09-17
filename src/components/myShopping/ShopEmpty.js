import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ShopEmpty = ({ message }) => {
  return (
    <div className="d-flex flex-column w-100 align-items-center">
      <Alert variant="danger" className="mt-2 w-100">
        <Alert.Heading>
          <h1
            className="text-capitalize fw-bold text-center text-dark"
            style={{ fontFamily: 'Roboto , cursive', fontSize: '1.4rem' }}
          >
            <span className="pe-1">{message}</span>
            <i
              class="bi bi-emoji-frown text-danger"
              style={{ fontSize: '1.4rem' }}
            ></i>
          </h1>
        </Alert.Heading>
      </Alert>
      <Link
        to="/"
        className="btn btn-primary  text-capitalize text-center w-100"
        style={{
          fontSize: '1.3rem',
          fontFamily: 'Roboto , cursive',
        }}
      >
        Back to the main page
      </Link>
    </div>
  );
};

export default ShopEmpty;
