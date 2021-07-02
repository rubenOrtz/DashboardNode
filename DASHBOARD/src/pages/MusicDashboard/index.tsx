/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Text,
} from "@chakra-ui/react";
import { HeaderComponent } from "../../components";
import { HeaderComponentQuery } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { findUser, getQueue } from "../../utils/api";
import { MdGraphicEq } from "react-icons/md";
import { menuQueryPage } from "../../graphql/queries";

export function MusicPage(props: any) {
  const state = {
    loading: true,
    Data: {},
    queueData: {},
    error: {},
  };

  const [loadingPlayer, setLoadingPlayer] = React.useState(true);
  const [datos, setDatos] = React.useState({});
  const [error2, setError2] = React.useState({});
  const { loading, error, data } = useQuery(
    HeaderComponentQuery && menuQueryPage
  );
  if (error) console.log(error);
  if (!loading) {
    const getUser = data;
    if (loadingPlayer) {
      const getData = async (data: any) => {
        return await findUser(data);
      };
      getData(getUser).then((data) => {
        const datos2 = data.response;
        if (datos2) {
          if (loadingPlayer) {
            setError2({ error: data.response });
            setLoadingPlayer(false);
          }
        } else {
          if (loadingPlayer) {
            getQueue(data.data[0].guild).then((queue) => {
              setDatos({ data, queue });
              setLoadingPlayer(false);
            });
          }
        }
      });
    }
    if (datos !== {}) {
      if (!loadingPlayer) {
        if ((datos as any).data.data.length === 0) {
          return (
            <div>
              <Text>You are not listening any music, bitch.</Text>
            </div>
          );
        } else {
          console.log(datos);
          return (
            <div>
              <HeaderComponent user={getUser} />
              <Slider
                aria-label="slider-ex-4"
                defaultValue={(datos as any).data.data.position}
                onChangeEnd={(data) => console.log(data)}
              >
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="tomato" as={MdGraphicEq} />
                </SliderThumb>
              </Slider>
              <img src={(datos as any).queue.data.thumbnail}></img>
              <Text>Current Playing: {(datos as any).queue.data.title}</Text>
              <Text>Hey! I found you </Text>
            </div>
          );
        }
      }
    }
  }

  return <div>Loading...</div>;
}

function guildId(guildId: any, guild: any) {
  throw new Error("Function not implemented.");
}
