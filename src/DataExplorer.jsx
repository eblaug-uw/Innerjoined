import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

const SOURCES = [
  { id: 'hotel', label: 'Hotels' },
  { id: 'guest', label: 'Guests' },
  { id: 'room', label: 'Rooms' },
  { id: 'booking', label: 'Bookings' },
  { id: 'busy_hotels', label: 'Busy Hotels' },
  { id: 'available_hilton_rooms', label: 'Open Hilton Rooms' },
];

export default function DataExplorer() {
  const [source, setSource] = useState('hotel');
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function choose(id) {
    setSource(id);
    setLoading(true);
    setError(null);
  }

  useEffect(() => {
    let ignore = false;
    supabase.from(source).select('*').then(({ data, error }) => {
      if (ignore) return;
      if (error) setError(error.message);
      else setRows(data);
      setLoading(false);
    });
    return () => { ignore = true; };
  }, [source]);

  const columns = rows.length ? Object.keys(rows[0]) : [];

  return (
    <section className="explorer">
      <nav className="tabs">
        {SOURCES.map((s) => (
          <button
            key={s.id}
            className={s.id === source ? 'active' : ''}
            onClick={() => choose(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {error && <p className="error">Error: {error}</p>}
      {loading && <p className="muted">Loading…</p>}
      {!loading && !error && rows.length === 0 && <p className="muted">No rows.</p>}

      {!loading && !error && rows.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((c) => <td key={c}>{row[c]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}