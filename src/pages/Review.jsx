import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css';

const Review = () => {
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
      window.location.href = "https://www.google.com/search?sca_esv=b127d74134c48222&sxsrf=AE3TifMIpIExIhBkzSxpNCEtezoTTpcqhQ:1750414385358&q=ro+ही+ro+sale,+service,+spare,+repair+reviews&uds=AOm0WdEtg8a29roR4VgMFId937dpbsz0ihuTsTGigDmwotBvcgo6Vj0m3MnydawI8F4JYKQ6VtvYgHJqqf8oH3_2jYBBUeR7KZwRf1Qt92yVBfxlvLlKmvVeKAGePQmNXnLwPQkq30JqivBLOMr94xG1wXn9Xr4awdWTrdxWDmXe0yoe1-YTpa-pjXdbS1qc7bdg2krYUq_nIWoThLgcuHXxkPVy1h9vHxvJO1unMCZLbt2wFFueF2MjBng0GPG1CMw61ZIppPRn7TUcHA1-KHnh6LT3LcrwMVMh7fxPcMJNeaHG237Z6j4RiNJcVeOWB6JYfXePVAMrUAfaAPaftypabXyxDv7gqoJHg2uGN8h0a70XmSDAvsiHGybHEkfQkUe9sJXDroGG&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_lwnJnxAylV4-x1TRbgv-vlRs0LcFvhLlKxAATQe6SlKdsKkybPLlcVTq_yLIZX79E9mAJh4tetyuyFihlsZIrBVGANYHZFtFI8PHClVGrT_xrpfNzWAq9YVwm_88v2FhAbmMw%3D&sa=X&ved=2ahUKEwi08Zfd4f-NAxXmzzgGHUibLk8Qk8gLegQIHRAB&ictx=1&stq=1&cs=1&lei=MTRVaPSUFeaf4-EPyLa6-QQ#ebo=1";
    }, 2000);  

  }, []);

  return (
    <>
      {loading ? (
        <div className="pre-loader">
          <div id="cloud-intro"></div>
          <div className="drone">
            <p className="loadingText">L O A D I N G . . .</p>
            <div className="arm top-left-arm">
              <div className="prop"></div>
            </div>
            <div className="arm top-right-arm">
              <div className="prop"></div>
            </div>
            <div className="arm bottom-left-arm">
              <div className="prop"></div>
            </div>
            <div className="arm bottom-right-arm">
              <div className="prop"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>Redirecting...</div> // You can add an optional text here if needed.
      )}
    </>
  );
};

export default Review;
