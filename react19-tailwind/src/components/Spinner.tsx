import ClipLoader from 'react-spinners/ClipLoader';
import { type CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '100px auto',
}

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader color="#4338ca" loading={loading} cssOverride={override} />
  )
}
export default Spinner