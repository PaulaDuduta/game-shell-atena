import { useSelector } from 'react-redux';

export default function AuthorizedInline({ children }) {
  const { authenticated } = useSelector(({ auth }) => {
    const { authenticated } = auth;

    return { authenticated };
  });

  if (!authenticated) {
    return <></>;
  }

  return <div>{children}</div>;
}
