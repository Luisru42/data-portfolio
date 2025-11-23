import React from 'react';

function ResumeDownload() {
  return (
    <section className="resume-download">
      <h3>Download My Resume</h3>
      <a href="/Resume.docx" download className="resume-btn">
        📄 Download Resume
      </a>
    </section>
  );
}

export default ResumeDownload;