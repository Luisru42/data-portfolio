import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h3>Featured Projects</h3>

      <div className="project">
        <h4>Sales Forecasting for Retail Chain</h4>
        <p>Built a time-series model using Prophet to forecast weekly sales across 120 stores. Reduced stockouts by 18%.</p>
        <a href="https://github.com/Luisru42/" target="_blank">Visual Representation</a>
      </div>

      <div className="project">
        <h4>Customer Churn Prediction</h4>
        <p>Used logistic regression and XGBoost to predict churn for a telecom provider. Achieved 92% precision and improved retention strategy.</p>
        <a href="https://github.com/Luisru42/" target="_blank">Visual Representation</a>
      </div>
    </section>
  );
}

export default Projects;