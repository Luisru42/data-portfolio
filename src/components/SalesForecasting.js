import React from 'react';
import './SalesForecasting.css';

const SalesForecasting = () => {
  return (
    <section className="sales-section">
      <h3>Sales Forecasting for Retail Chain</h3>
      <p>
        Developed a time-series model using <strong>Prophet</strong> to forecast weekly sales across <strong>120 stores</strong>. This solution led to an <strong>18% reduction in stockouts</strong>, improving inventory efficiency and customer satisfaction.
      </p>
      <div className="sales-graphic">
        <img src="/sales-graphic.png" alt="Sales forecasting visualization" />
      </div>
    </section>
  );
};

export default SalesForecasting;