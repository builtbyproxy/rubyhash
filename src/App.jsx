import React from 'react';
import Layout from './components/Layout';
import DiffForm from './components/DiffForm';
import BlogList from './components/BlogList'

const Home = () => {
  return (
    <Layout title="RubyHash" subtitle="Welcome to RubyHash">
      <DiffForm />
      {/* <BlogList /> */}
    </Layout>
  );
}

const App = () => {
  return (
    <Home />
  );
};

export default App;