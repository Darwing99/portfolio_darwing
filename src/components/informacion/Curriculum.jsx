import React from 'react'

const Curriculum = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Document file="https://drive.google.com/file/d/1-yLiR5lYvNGXiHGkduUzJfa68yYZOsju/view?usp=sharing" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
}

export default Curriculum