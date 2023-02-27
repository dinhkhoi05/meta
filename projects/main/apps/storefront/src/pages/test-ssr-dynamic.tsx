import Foo from '@components/Foo';
import { withDefaultAdapter } from '@main/packages-web-storefront/src/util/withDefaultAdapter';
import type { NextPage } from 'next';

const TestSsrDynamic: NextPage = () => {
  return <Foo />;
};

export default withDefaultAdapter(TestSsrDynamic);
