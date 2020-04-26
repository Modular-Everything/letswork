import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { Form, Input, Label } from '../../components/FormTypes';

// ====================================

const About = () => {
  const [jobSpec, setJobSpec] = useState({
    client: { clientName: '', clientJobTitle: '', clientCompany: '' },
  });

  // ==============

  const [activeStep, setActiveStep] = useState(1);
  // const [isComplete, setIsComplete] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  const totalSteps = 3;

  // ==============

  const handleSubmit = (e) => {
    e.preventDefault();

    setJobSpec({
      client: {
        clientName: e.target.clientName.value,
        clientJobTitle: e.target.clientJobTitle.value,
        clientCompany: e.target.clientCompany.value,
      },
    });
  };

  // ==============

  return (
    <Layout>
      <Container>
        <h2>
          Active Step: {activeStep}/{totalSteps}
        </h2>

        <Form handleSubmit={handleSubmit}>
          <div style={{ opacity: activeStep === 1 ? '1' : '0' }}>
            <div>
              <Label>
                <span>My name is</span>
                <Input
                  type="text"
                  name="clientName"
                  placeholder="Forename Surname"
                  required
                />
              </Label>

              <Label>
                <span>I am a</span>
                <Input
                  type="text"
                  name="clientJobTitle"
                  placeholder="Job Title"
                  required
                />
              </Label>

              <Label>
                <span>My company is</span>
                <Input
                  type="text"
                  name="clientCompany"
                  placeholder="Company Name"
                  required
                />
              </Label>
            </div>
          </div>

          <div style={{ opacity: activeStep === 2 ? '1' : '0' }}>
            <div>Another step</div>
          </div>

          <div style={{ opacity: activeStep === 3 ? '1' : '0' }}>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </Form>

        <hr style={{ margin: '48px 0' }} />

        <div>
          {activeStep > 1 && (
            <button type="button" onClick={() => setActiveStep(activeStep - 1)}>
              Previous Step
            </button>
          )}
          {activeStep !== totalSteps && (
            <button type="button" onClick={() => setActiveStep(activeStep + 1)}>
              Next Step
            </button>
          )}
        </div>

        <hr style={{ margin: '48px 0' }} />

        <h2>
          Your name is <strong>{jobSpec.client.clientName}</strong>
          <br />
          you are a <strong>{jobSpec.client.clientJobTitle}</strong>
          <br />
          and your company is <strong>{jobSpec.client.clientCompany}</strong>
        </h2>
      </Container>
    </Layout>
  );
};

export default About;
