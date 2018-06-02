import React from 'react';

import { PrimarySection } from '../components';
import { Button } from '../styledComponents/theme';

const NotFoundPage = () => (
  <PrimarySection title="Diese Seite gibt es leider nicht" subtitle="404">
    <Button to="/">Zurück zur Startseite</Button>
  </PrimarySection>
);

export default NotFoundPage;
