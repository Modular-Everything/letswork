import React, { useState, useRef, useEffect } from 'react';

import { gsap } from 'gsap';
// import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

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

  const StepsRef = useRef(null);

  useEffect(() => {
    const getAllSteps = StepsRef.current.children[0].children;
    const getActiveStep = getAllSteps[activeStep - 1];

    gsap.to(getAllSteps, { opacity: 0, ease: 'power3' });
    gsap.to(getActiveStep, { opacity: 1, ease: 'power3' });
  });

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  // ==============

  return (
    <Layout>
      <Container>
        <div className="stepCounter">
          <h2>
            Step: {activeStep} of {totalSteps}
          </h2>
        </div>

        <Steps ref={StepsRef}>
          <Form handleSubmit={handleSubmit}>
            <Step data-step="1">
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
            </Step>

            <Step data-step="2">Another step</Step>

            <Step data-step="3">
              <button type="submit">Submit</button>
            </Step>
          </Form>
        </Steps>

        <hr style={{ margin: '48px 0' }} />

        <div className="stepControls">
          {activeStep > 1 && (
            <button type="button" onClick={prevStep}>
              Previous Step
            </button>
          )}
          {activeStep !== totalSteps && (
            <button type="button" onClick={nextStep}>
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

// ====================================

const Steps = styled.div();

// ======

const Step = styled.div();
