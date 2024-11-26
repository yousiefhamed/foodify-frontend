const ColorfulContainer = ({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
}) => {
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="w-12 h-12 rounded-lg flex justify-center items-center p-2 bg-red-300 shadow-lg"
    >
      {children}
    </div>
  );
};

export default ColorfulContainer;
