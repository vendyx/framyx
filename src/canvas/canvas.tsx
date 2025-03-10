import './canvas.css';

import { ConnectForm } from '@/connect-form';
import { usePluginContext } from '@/plugin-context';
import { framer } from 'framer-plugin';
import { COMPONENTS } from './components';

export const Canvas = () => {
  const { isConnected } = usePluginContext();

  return (
    <div className="container">
      {isConnected ? (
        <div className="canvas__container">
          <header>
            <h1>Components</h1>
          </header>
          <section>
            {COMPONENTS.map(comp => (
              <article>
                <h3>{comp.name}</h3>
                <button
                  onClick={() =>
                    framer.addComponentInstance({
                      url: comp.url
                    })
                  }
                >
                  Insert
                </button>
              </article>
            ))}
          </section>
        </div>
      ) : (
        <ConnectForm />
      )}
    </div>
  );
};
