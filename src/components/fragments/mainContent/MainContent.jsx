import HomePage from '../../../pages/HomePage';
import AboutPage from '../../../pages/AboutPage';
import ProdukPage from '../../../pages/ProdukPage';

const MainContent = () => {
  return (
    <main className="flex flex-col">
      <HomePage />
      <AboutPage />
      <ProdukPage />
    </main>
  );
};

export default MainContent;
