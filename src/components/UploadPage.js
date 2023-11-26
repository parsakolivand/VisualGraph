import React, { useState, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

const UploadPage = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const expectedHeaders = [
    "Name", "assignment", "ansdoain", "aiosndaosi", "aisndoa", "oaisndoad"
    // ... any other headers you expect
  ];
  
  const onDrop = useCallback(acceptedFiles => {
    setError('');
  
    acceptedFiles.forEach(file => {
      if (file.type !== 'text/csv') {
        setError('Please upload only CSV files.');
        return;
      } else if (file.size <= 0) {
        setError('The CSV file is empty. Please upload a file with content.');
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.split(/\r\n|\n/); // Split the text into lines
        const fileHeaders = lines[0].split(',').map(header => header.trim()); // Split the first line into headers and trim whitespace
        
        // Check which expected headers are missing from the file's headers
        const missingHeaders = expectedHeaders.filter(header => !fileHeaders.includes(header));
        
        if (missingHeaders.length > 0) {
          setError(`The CSV file is missing the following headers: ${missingHeaders.join(', ')}.`);
        } else {
          // If file is valid, add it to the state
          setFiles(prevFiles => [...prevFiles, file]);
          setError(''); // Clear any previous errors
        }
      };
  
      // Trigger the reader to read the file as text
      reader.readAsText(file);
    });
  }, [expectedHeaders]);
  
  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv' // This specifies that only CSV files are accepted
  });

  const removeFile = (file) => {
    setFiles(prevFiles => prevFiles.filter(p => p.name !== file.name));
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="dashboard">
      <header>
        <nav>
          <NavLink to="/dashboard" className="nav-link">Home</NavLink>
          <NavLink to="/upload" className="nav-link">Upload</NavLink>
        </nav>
      </header>

      <div className="upload-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
        <div {...getRootProps()} className="dropzone" style={{ width: '50%', maxWidth: '600px' }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <button type="button">Browse</button>
        </div>

        {error && <div className="error-message" style={{ color: 'red', marginTop: '20px' }}>{error}</div>}

        <aside className="files-list-section" style={{ marginTop: '20px' }}>
          <h4>Files</h4>
          <ul className="files-list">
            {files.map(file => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
                <button onClick={() => removeFile(file)} className="button-remove">Remove</button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default UploadPage;
