import { Button } from '@/shared/components/button';
import './connect-form.css';

export const ConnectForm = () => {
  return (
    <form className="connect__form" action="">
      <div className="connect__input_container">
        <label htmlFor="input-storefront">Storefront API access token</label>
        <input id="input-storefront" type="text" placeholder="4837bf1ee2a3a5e078cb4cada1921" />
      </div>
      <div className="connect__input_container">
        <label htmlFor="input-shop-id">Shop ID</label>
        <input id="input-shop-id" type="text" placeholder="bfcf194c-625c-4383-9544-3186464833f5" />
      </div>
      <Button className="framer-button-primary">Connect</Button>
    </form>
  );
};
