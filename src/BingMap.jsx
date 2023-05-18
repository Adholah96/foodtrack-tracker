import React from 'react';
import BingMapsReact from 'bingmaps-react';

export const BingMap = (props) => {
  return (
    <BingMapsReact
      bingMapsKey="AlCByWRZ51mwoKU3fBs8DdwjVXOCKETTOoOU2cSiI87P_DjeALRt288PRE8MuL4d"
      height="100%"
      mapOptions={{
        navigationBarMode: 'square',
        showLocateMeButton: true,
      }}
      pushPins={props.pushPins}
      width="100%"
      viewOptions={{
        center: {
          latitude: 37.766897602559155,
          longitude: -122.42032247306807,
        },
        mapTypeId: 'grayscale',
        zoom: 12,
      }}
    />
  );
};
