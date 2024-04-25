import React from 'react';
import Layout from './components/Layout';
import DiffForm from './components/DiffForm';

const App = () => {
  return (
    <Layout title="RubyHash" subtitle="Welcome to RubyHash">
      <DiffForm />
    </Layout>
  );
};

export default App;