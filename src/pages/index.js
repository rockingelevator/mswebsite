import React from 'react';
import { P } from '../styledComponents/typography';
import { PrimarySection, Section } from '../components';
// import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <PrimarySection subtitle="Wir entwickeln Lösungen zur sicheren Digitalisierung von Geschäftsprozessen für mittelständische Unternehmen und Konzerne in Logistik, Handel, Produktion, Dienstleistung und E-Commerce.">
      <P>
        Wir entwerfen und programmieren schlanke und robuste Individualsoftware,
        die sich flexibel in Ihre Systemlandschaft einfügt. Dazu nutzen wir
        neueste Methodologien wie Microservices und Serverless-Architektur. Auf
        Basis der Blockchain-Technologie beraten wir zum Einsatz in Ihrem
        Unternehmen und entwickeln Blockchain-Plattformen und Smart Contracts.
        Mit unseren Web-Experten betreuen wir den gesamten Lebenszyklus von
        Web-Apps: Von Konzept über Grafik, User Interface und User Experience
        bis zum Roll-Out.
      </P>
      <P>
        Wir durchdringen unternehmerische und IT-relevante Aspekte Ihres
        Projekts, damit Sie Ihre Geschäftsprozesse zuverlässig, schnell und
        sicher abwickeln können. Unsere Experten-Teams sorgen dabei für hohe
        Kosteneffizienz und einen sortierten Projektverlauf.
      </P>
    </PrimarySection>
  </div>
);

export default IndexPage;
