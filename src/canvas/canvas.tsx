import { ConnectForm } from '@/connect-form';
import { usePluginContext } from '@/plugin-context';

export const Canvas = () => {
  const { isConnected } = usePluginContext();

  return <div className="container">{isConnected ? <h1>Canvas</h1> : <ConnectForm />}</div>;
};
