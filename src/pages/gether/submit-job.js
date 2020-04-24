import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { Form, Input, Label } from '../../components/FormTypes';

// ====================================

const About = () => {
  const [jobSpec, setJobSpec] = useState({
    client: { clientName: '', clientJobTitle: '', clientCompany: '' },
  });

  const [showForm, setShowform] = useState(true);

  // ==============

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowform(false);

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
        <Form handleSubmit={handleSubmit}>
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

          <button type="submit">Submit</button>
        </Form>

        {!showForm && (
          <h2>
            Your name is <strong>{jobSpec.client.clientName}</strong>
            <br />
            you are a <strong>{jobSpec.client.clientJobTitle}</strong>
            <br />
            and your company is <strong>{jobSpec.client.clientCompany}</strong>
          </h2>
        )}
      </Container>
    </Layout>
  );
};

export default About;
