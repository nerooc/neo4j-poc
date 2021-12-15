import React from "react";
import ReactLoading from "react-loading";
import { useParams } from "react-router";
import { IDriver, IRacetrack } from "../types";
import { getAllDrivers, getRacetrack, getWinner, setWinner } from "../api";

export const SingleRacetrack = () => {
  const { id } = useParams();
  const [racetrack, setRacetrack] = React.useState<IRacetrack>();
  const [winner, setLocalWinner] = React.useState<IDriver>();
  const [drivers, setDrivers] = React.useState<IDriver[]>();

  const getSingleRacetrack = async () => {
    const { data } = await getRacetrack(id!);
    setRacetrack(data);
  };

  const getRacetrackWinner = async () => {
    const { data } = await getWinner(id!);
    setLocalWinner(data);

    if (data.name === "Not") {
      await getDrivers();
    }
  };

  const getDrivers = async () => {
    const { data } = await getAllDrivers();
    setDrivers(data);
  };

  const getData = async () => {
    await getSingleRacetrack();
    await getRacetrackWinner();
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!racetrack ? (
        <>
          Loading
          <ReactLoading type={"bars"} color={"blue"} height={300} width={300} />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>{racetrack!.name} </h1>
          <img src={racetrack!.image_url} alt="racetrack_img" height={400} />
          {winner ? (
            <h3>Winner: {winner.name + " " + winner.surname} </h3>
          ) : (
            <h3>Loading winner...</h3>
          )}
          {winner && winner.name === "Not" && drivers && (
            <>
              <h3>Who won the race? (click to select)</h3>
              {drivers.map((driver) => (
                <p
                  onClick={async () => {
                    await setWinner(id!, driver._id!);
                    await getRacetrackWinner();
                  }}
                  key={driver._id}
                >
                  {driver.name + " " + driver.surname}
                </p>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
