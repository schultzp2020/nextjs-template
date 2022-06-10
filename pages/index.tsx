import type { NextPage } from 'next';
import { Box, Provider as MosaicProvider, injectStyles } from '@stoplight/mosaic';
import { JsonSchemaViewer } from '@stoplight/json-schema-viewer';
import { devfileSchema } from '../devfileJsonSchema';

export const Home: NextPage = () => {
  injectStyles();

  return (
    <MosaicProvider>
      <Box mx="auto" py={20} px={8} style={{ maxWidth: 800 }}>
        <JsonSchemaViewer
          schema={devfileSchema}
          emptyText="No schema defined"
          renderRootTreeLines
        />
      </Box>
    </MosaicProvider>
  );
};

export default Home;
