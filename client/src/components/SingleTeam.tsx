import React from "react";
import ReactLoading from "react-loading";
import { useParams } from "react-router";
import { IDriver, ITeam } from "../types";
import { getDrivers, getTeam } from "../api";
import { Link } from "react-router-dom";

export const SingleTeam = () => {
  const { id } = useParams();
  const [team, setTeam] = React.useState<ITeam>();
  const [drivers, setDrivers] = React.useState<IDriver[]>();

  const getSingleTeam = async () => {
    const { data } = await getTeam(id!);
    setTeam(data);
  };

  const getTeamDrivers = async () => {
    const { data } = await getDrivers(id!);
    console.log(data);
    setDrivers(data);
  };

  const getData = async () => {
    await getSingleTeam();
    await getTeamDrivers();
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!team ? (
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
          <h1>{team!.name} </h1>
          <img src={team!.image_url} alt="team_img" height={400} />
          <h3>Drivers:</h3>
          {drivers ? (
            drivers.length ? (
              <>
                {drivers.map((driver) => (
                  <Link key={driver._id} to={`/drivers/${driver._id}`}>
                    <h4>
                      {driver.name + " " + driver.surname}
                    </h4>
                  </Link>
                ))}
              </>
            ) : (
              <h4>Brak danych</h4>
            )
          ) : (
            <h3>Loading drivers...</h3>
          )}
        </div>
      )}
    </>
  );
};
