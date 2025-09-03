export default function SectionTabs({ onChangePage, activePage }) {
  const tabs = [
    { label: 'USLUGE', page: 'gradevinska' },
    { label: 'PROJEKTI', page: 'projekti' }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1rem',
        paddingLeft: '1.5rem'
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.page}
          onClick={() => onChangePage(tab.page)}
          style={{
            background: 'none',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: activePage === tab.page ? '#004080' : '#888888',
            textDecoration: activePage === tab.page ? 'underline' : 'none',
            fontSize: '1.5rem',
            textAlign: 'left',
            padding: 0,
            lineHeight: '2rem',
            outline: 'none',
            boxShadow: 'none',
          }}
          aria-current={activePage === tab.page ? 'page' : undefined}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
