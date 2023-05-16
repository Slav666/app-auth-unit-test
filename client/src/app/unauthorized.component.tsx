import { FC, ReactElement } from 'react';

interface Props {
  goBack: () => void;
}

export const Unauthorized: FC<Props> = ({ goBack }): ReactElement => (
  <section>
    <h1>Unauthorized</h1>

    <br />

    <p>You do not have access to the requested page.</p>

    <div className="flexGrow p-4">
      <button className="cursor-pointer rounded-md border-2 border-white bg-green-500 p-2" onClick={goBack}>
        Go Back
      </button>
    </div>
  </section>
);
