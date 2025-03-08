import { framer } from 'framer-plugin';
import { Import } from './import';
import { usePluginContext } from './plugin-context';
import { Canvas } from './canvas';

export function App() {
  const { mode } = usePluginContext();

  if (mode === 'configureManagedCollection') {
    framer.showUI({
      position: 'center',
      width: 450,
      height: 280
    });

    return <Import />;
  }

  if (mode === 'canvas') {
    framer.showUI({
      position: 'top right',
      width: 365,
      height: 650
    });

    return <Canvas />;
  }
}
