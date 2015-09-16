import React, {Component} from 'react';

import Section from '../components/Section';
import Btn from 'components/Btn/Btn';
import Icon from 'components/Icon/Icon';
import * as m from 'globals/modifiers.css';

export default class BtnSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section name="Buttons" href="https://github.com/PactCoffee/loggins/blob/master/styleguide%2Fsections%2FButtons.js">

        <Btn className={[m.mbs, m.mrs].join(' ')}>Standard</Btn>

        <h3>Types</h3>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="primary">Primary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="secondary">Secondary</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="warning">Warning</Btn>

        <h3>Variants</h3>

        <h4>Hollow</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="hollow">Hollow</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="secondary" variant="hollow">Secondary</Btn>

        <h4>Clean</h4>

        <Btn className={[m.mbs, m.mrs].join(' ')} variant="clean">Clean</Btn>
        <Btn className={[m.mbs, m.mrs].join(' ')} type="primary" variant="clean">Primary</Btn>

        <h3>With icon(s)</h3>

        <Btn className={m.mbs}>
          <Icon name="heart"/>
          &nbsp;
          Avec icon
          &nbsp;
          <Icon name="coffee"/>
        </Btn>

        <Btn fullWidth>Full width</Btn>

      </Section>
    );
  }
}
