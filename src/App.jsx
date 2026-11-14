import { Routes, Route, Link } from 'react-router';
import DataExplorer from './DataExplorer';

const F1_RED = '#E10600';

function Home() {
  return (
    <>
      <svg viewBox="0 0 800 400" role="img" aria-label="Team Innerjoined, CSS 475, Project coming soon">
        <g fill={F1_RED} textAnchor="middle" fontFamily="'Titillium Web', sans-serif">
          <text x="400" y="150" fontSize="72" fontWeight="900">Team Innerjoined</text>
          <text x="400" y="230" fontSize="40" fontWeight="600">CSS 475</text>
          <text x="400" y="300" fontSize="28" letterSpacing="4">PROJECT COMING SOON</text>
        </g>
      </svg>
      <Link to="/explore" className="btn">Data Explorer</Link>
    </>
  );
}

function ExplorerPage() {
  return (
    <>
      <Link to="/" className="back">← Home</Link>
      <DataExplorer />
    </>
  );
}

export default function App() {
  return (
    <main className="stage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorerPage />} />
      </Routes>
    </main>
  );
}