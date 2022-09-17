import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './NavigationForm';
import { useHistory } from 'react-router-dom';
import './NavigationForm.css';
const NavigationForm = () => {
  const [query, setQuery] = useState('');
  const history = useHistory('');
  onSubmitSearch = (e) => {
    e.preventDefault();
    history.push(`/list/${query}`);
    setQuery('');
  };
  return (
    <Form className="navigation_Form flex-grow-1" onSubmit={onSubmitSearch}>
      <Form.Group className="d-flex gap-2 ">
        <Form.Control
          className="search_Form"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Form.Control>
        <Button
          type="submit"
          variant="success"
          size="lg"
          className="text-capitalize navgiation_Form--Submit"
          style={{ fontFamily: 'Roboto' }}
        >
          search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default NavigationForm;
