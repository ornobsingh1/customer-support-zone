import Container from "./Container";

const CountBox = ({taskStatus, resolved}) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="flex flex-col justify-center items-center gap-4 text-white rounded-xl shadow-xl py-16 px-10 bg-linear-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
          <img
            src={"/vector1.png"}
            alt=""
            className="absolute object-cover inset-0"
          />

          <img
            src={"/vector1.png"}
            alt=""
            className="absolute object-cover inset-0 transform -scale-x-100 translate-x-65"
          />
          {/* in progress */}
          <div className="relative z-10 text-center">
            <h2 className="text-xl font-semibold mb-2">In-Progress</h2>
            <span className="text-5xl font-bold">{taskStatus}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 text-white rounded-xl shadow-xl py-16 px-10 bg-linear-to-r from-green-600 to-teal-600 relative overflow-hidden">
          <img
            src={"/vector1.png"}
            alt=""
            className="absolute object-cover inset-0"
          />
          <img
            src={"/vector1.png"}
            alt=""
            className="absolute object-cover inset-0 transform -scale-x-100 translate-x-65"
          />
          {/* resolved */}
          <div className="relative z-10 text-center">
            <h2 className="text-xl font-medium">Resolved</h2>
            <span className="text-5xl font-bold">{resolved}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
