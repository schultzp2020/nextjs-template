import type { NextPage } from 'next';
import { JsonSchemaViewer } from '@stoplight/json-schema-viewer';
import { schema } from '../devfileJsonSchema';

export const Home: NextPage = () => (
  <div>
    <JsonSchemaViewer schema={schema} emptyText="No schema defined" defaultExpandedDepth={0} />
  </div>
);

export default Home;
