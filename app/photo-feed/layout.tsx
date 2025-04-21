export default function Layout(props: {
  model: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {props.model}
      {props.children}
    </>
  );
}
