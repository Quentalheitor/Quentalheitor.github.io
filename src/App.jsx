<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
  <CertCard 
    title={t.certs.groups.isc2.title(t.certs.isc2List.length)}
    description={t.certs.groups.isc2.desc}
    imagePath="/images/ISC2_logo.webp"
    onGroupClick={() => setActiveModal('isc2')}
  />
  <CertCard 
    title={t.certs.groups.flyrank.title(t.certs.flyrankList.length)}
    description={t.certs.groups.flyrank.desc}
    imagePath="/images/Flyrank_logo.webp"
    onGroupClick={() => setActiveModal('flyrank')}
  />
  <CertCard 
    title={t.certs.groups.anthropic.title(t.certs.anthropicList.length)}
    description={t.certs.groups.anthropic.desc}
    imagePath="/images/Anthropic_logo.webp"
    onGroupClick={() => setActiveModal('anthropic')}
  />
  <CertCard 
    title={t.certs.groups.senac.title(t.certs.senacList.length)}
    description={t.certs.groups.senac.desc}
    imagePath="/images/Senac_logo.webp"
    onGroupClick={() => setActiveModal('senac')}
  />
  <CertCard 
    title={t.certs.groups.events.title(t.certs.eventList.length)}
    description={t.certs.groups.events.desc}
    imagePath="/images/Heitor Quental Feitosa Kehrle do Amaral-1.webp"
    onGroupClick={() => setActiveModal('events')}
  />
</div>
