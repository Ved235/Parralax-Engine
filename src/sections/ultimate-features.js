/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Great Market Value',
    description: `We provide you with the most reasonably priced tool to increase your profit TEN folds!`,
    moreLink: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Fastest Tool',
    description: `Our team of A.I leaders have provided  with the most optimized, efficient and lightning technology`,
    moreLink: '#',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Ultimate Org Support',
    description: `Get your info delivered and analysed easily` ,
    moreLink: '#',
  }
];

const UltimateFeatures = () => {
  return (
    <section sx={styles.section} id="services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Go beyond ultimate Services"
          description="Ideal solutions for you"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    pt: [12],
    pb: [6, null, null, 8, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
  },
  features: {
    gap: [6, null, null, '90px 40px'],
    display: ['grid'],
    maxWidth: 1175,
    mx: 'auto',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 300px)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
};