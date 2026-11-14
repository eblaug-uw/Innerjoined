import '@fontsource/titillium-web/400.css';
import '@fontsource/titillium-web/600.css';
import '@fontsource/titillium-web/900.css';

const F1_RED = "#FF1E00";

export default function App(){
  return (
    <main className="stage">
      <svg viewBox="0 0 800 400" role="img" aria-label="Coming Soon">
        <g fill={F1_RED} textAnchor="middle" fontFamily="'Titillium Web', sans-serif">
          <text x="400" y="150" fontSize="72" fontWeight="800">Team Innerjoined</text>
          <text x="400" y="230" fontSize="40" fontWeight="600">CSS 475</text>
          <text x="400" y="300" fontSize="28" letterSpacing="4">PROJECT COMING SOON</text>
        </g>
      </svg>
    </main> 
  );
}