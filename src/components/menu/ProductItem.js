import React from 'react';
import { useState } from 'react';
import { Button, Col, Badge } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactDOM from 'react-dom';
import './ProductItem.css';
const ProductItem = ({ name }) => {
  const [copy, setCopied] = useState(false);
  /// Update When Click Button
  const updateCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };
  /// Render Message Copied Success
  const renderCopy = () => {
    if (!copy) return null;
    return (
      <span className="text-copyClipboard text-capitalize text-light position-absolute top-25  me-2 end-100   rounded-2 py-1 px-2">
        copied
      </span>
    );
  };
  /// Render Change Icon
  const renderIconCopyClipBoard = () => {
    return copy ? (
      <i className="bi bi-clipboard-check-fill icon_copyClipboard"></i>
    ) : (
      <i className="bi bi-clipboard icon_copyClipboard"></i>
    );
  };
  return (
    <Col>
      <section className="w-100 d-flex justify-content-between align-items-center bg-dark border border-warning  text-light rounded-1 p-2">
        <span className="text-capitalize product_Name">{name}</span>
        <CopyToClipboard onCopy={updateCopied} text={name}>
          <Button className="btn-light btn-outline-black text-dark position-relative">
            {renderIconCopyClipBoard()}
            {renderCopy()}
          </Button>
        </CopyToClipboard>
      </section>
    </Col>
  );
};

export default ProductItem;
