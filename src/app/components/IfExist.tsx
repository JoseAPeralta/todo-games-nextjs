type ifExistType = {
  children: React.ReactNode;
  prop: any;
};

const IfExist = ({ children, prop }: ifExistType) => {
  return <>{prop !== null && prop !== undefined ? children : null}</>;
};

export default IfExist;
