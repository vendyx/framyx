import './connect-form.css';
import { useConnectForm } from './use-connect-form';

export const ConnectForm = () => {
  const { isLoading, setForm, onSubmit } = useConnectForm();

  return (
    <form className="connect__form" onSubmit={onSubmit}>
      <div className="connect__input_container">
        <label htmlFor="input-storefront">Storefront API access token</label>
        <input
          id="input-storefront"
          type="text"
          placeholder="4837bf1ee2a3a5e078cb4cada1921"
          onChange={e => setForm(form => ({ ...form, storefrontApiKey: e.target.value }))}
        />
      </div>
      <div className="connect__input_container">
        <label htmlFor="input-shop-id">Shop ID</label>
        <input
          id="input-shop-id"
          type="text"
          placeholder="bfcf194c-625c-4383-9544-3186464833f5"
          onChange={e => setForm(form => ({ ...form, shopId: e.target.value }))}
        />
      </div>
      <button disabled={isLoading} type="submit">
        {isLoading ? 'Connecting...' : 'Connect'}
      </button>
    </form>
  );
};
