import { withDefaultAdapter } from '@main/packages-web-storefront/src/modules/util/withDefaultAdapter';
import TestBed from '@main/ui-testbed/src/components/TestBed';
import type { NextPage } from 'next';

const TestSsrDynamic: NextPage = () => {
  return <TestBed />;
};

export default withDefaultAdapter(TestSsrDynamic);
