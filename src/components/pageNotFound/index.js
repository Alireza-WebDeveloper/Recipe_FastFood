import React from 'react';
import { Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './pageNotFound.css';

const PageNotFound = () => {
  return (
    <Container>
      <div className="d-flex flex-column w-100 align-items-center py-2 gap-3">
        <section className="w-100 d-flex justify-content-center">
          <Image
            fluid
            src="https://img.freepik.com/premium-vector/people-see-binocular-got-404-error-found-concept-illustration-404-found-pages_258153-323.jpg?w=900"
            rounded
            className="w-100 img_NotFound"
          />
        </section>
        <section className="w-100">
          <h1
            className="text-capitalize fw-bold text-warning"
            style={{ fontFamily: 'Roboto' }}
          >
            page not found
          </h1>
          <p
            className="text-light text-capitalize ps-2"
            style={{ fontFamily: 'Robo', fontSize: '1.3rem' }}
          >
            the page you are looking for does not exist.it might have been moved
            or deleted
          </p>
          <Link
            className="btn btn-primary text-capitalize w-100"
            to="/"
            style={{ fontSize: '1.6rem' }}
          >
            Back to the main page
          </Link>
        </section>
      </div>
    </Container>
  );
};

export default PageNotFound;
