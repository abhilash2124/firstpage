function showDetails(service) {
    const details = {
      ac: `
        <h3>AC Repair</h3>
        <p>We provide fast and reliable AC repair services for all brands. Our expert technicians ensure your air conditioning runs smoothly during the hottest days.</p>
      `,
      computer: `
        <h3>Computer Setup</h3>
        <p>Need help setting up a new computer? We handle installations, software setup, virus protection, and more to get you up and running quickly.</p>
      `,
      electrical: `
        <h3>Electrical Work</h3>
        <p>From fixing electrical faults to setting up new wiring, our certified electricians ensure safe and professional services for your home or office.</p>
      `
    };
  
    const detailBox = document.getElementById('service-details');
    detailBox.innerHTML = details[service];
    detailBox.style.display = 'block';
  }
  