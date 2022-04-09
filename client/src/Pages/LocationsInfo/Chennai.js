import React from "react";
import UnLoggedNavbar from "../../components/Navbar/UnLoggedNavbar";
import "./locations.css";
import Footer from "../../components/Footer";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import LocationsData from "./TempLocations";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

const MAX_ZOOM = 17;
function Chennai() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(88.363892);
  const [mapLatitude, setMapLatitude] = useState(22.572645);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});
  const [loading, setLoading] = useState(true);
  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  const HandleLocationChange = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    let map = tt.map({
      key: "RpTpj8X957oUyvRp2OAimvyUAO2KmCdG",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);

    console.log(map);
    return () => map.remove();
  }, []);
  return (
    <>
      <UnLoggedNavbar />
      <div className="Location-Div">
        <h1 className="Top-Heading">Chennai</h1>
        <div className="Maps">
          <Container>
            <Row>
              <Col sm={6}>
                <div ref={mapElement} className="container mapDiv" />
              </Col>
              <Col sm={6}>
                <div className="container Location-Info">
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Shop Name</th>
                        <th>Owner</th>
                        <th>Location</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LocationsData.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.shopname}</td>
                            <td>{data.Owner}</td>
                            <td>
                              Lat : {data.location.lat}, Lag:{" "}
                              {data.location.lng}
                            </td>
                            <td>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  setMapLongitude(data.location.lng);
                                  setMapLatitude(data.location.lat);
                                  updateMap();
                                }}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Chennai;

/*



*/
