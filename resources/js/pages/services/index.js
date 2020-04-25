import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className='services-page'>
      <div className='container'>
        <h1>Services</h1>
        <h3>For Companies</h3>
        <ul>
          <li>
            <Link to='/services/export-market-intelligence'>
              Export Market Intelligence
            </Link>
          </li>
          <li>
            <Link to='/services/finding-buyers'>Finding Buyers</Link>
          </li>
          <li>
            <Link to='/services/export-marketing-strategy-development'>
              Export Marketing Strategy Development
            </Link>
          </li>
          <li>
            <Link to='/services/organisational-development'>
              Organisational Development
            </Link>
          </li>
          <li>
            <Link to='/services/training-for-exporters'>
              Training for Exporters
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
