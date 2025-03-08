import { usePluginContext } from '@/plugin-context';

export const useConnectForm = () => {
  const { connect } = usePluginContext();

  const onSubmit = () => {
    connect('vendyx', '1234');
  };

  return {
    onSubmit
  };
};
