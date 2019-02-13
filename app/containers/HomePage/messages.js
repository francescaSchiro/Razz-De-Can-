/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  breedPlaceholder: {
    id: `${scope}.breedPlaceholder`,
    defaultMessage: 'Clicca per un cane a caso',
  },
  buttonText: {
    id: `${scope}.buttonText`,
    defaultMessage: 'Cliccami',
  },
});
