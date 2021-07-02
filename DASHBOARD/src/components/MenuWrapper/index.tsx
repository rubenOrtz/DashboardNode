import React from "react";
import { Box, Image, Circle, Link } from "@chakra-ui/react";
import { rewriteURIForGET } from "@apollo/client";
import { Link as ReachLink } from "react-router-dom";

export function MenuComponent({ guilds }: { guilds: any }) {
  function included(guild: any) {
    let avatar;
    if (guild.icon) {
      avatar =
        "https://cdn.discordapp.com/icons/" +
        guild.id +
        "/" +
        guild.icon +
        ".png";

      return (
        <div>
          <Box
            as="button"
            borderRadius="md"
            bg="white"
            p="7"
            w="70%"
            px={4}
            h={8}
          >
            <Image
              borderRadius="full"
              boxSize="34px"
              objectFit="cover"
              src={avatar}
            />
          </Box>
          <li> {guild.name} </li>
          <ReachLink to={`/dashboard/${guild.id}`}> View Dashboard</ReachLink>
        </div>
      );
    } else if (!guild.icon) {
      const nombres = guild.name.split(" ");
      let name: any;
      const name2 = nombres.filter((names: any) => {
        if (name) {
          name = name + names.charAt(0);
        } else {
          name = names.charAt(0);
        }
      });
      return (
        <div>
          <Box
            as="button"
            borderRadius="md"
            bg="white"
            p="7"
            w="70%"
            px={4}
            h={8}
          >
            <Circle size="34px" bg="#23272A" color="white">
              <div>{name}</div>
            </Circle>
          </Box>
          <li> {guild.name} </li>
          <ReachLink to={`/dashboard/${guild.id}`}> View Dashboard</ReachLink>
        </div>
      );
    }
  }
  function excluded(guild: any) {
    let avatar;
    if (guild.icon) {
      avatar =
        "https://cdn.discordapp.com/icons/" +
        guild.id +
        "/" +
        guild.icon +
        ".png";

      return (
        <div>
          <Box
            as="button"
            borderRadius="md"
            bg="white"
            p="7"
            w="70%"
            px={4}
            h={8}
          >
            <Image
              borderRadius="full"
              boxSize="34px"
              objectFit="cover"
              src={avatar}
            />
          </Box>
          <li> {guild.name} </li>
          <Link
            href={`https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmenu&permissions=2147483647&client_id=818892469130362890&guild_id=${guild.id}`}
          >
            {" "}
            Invite Bot
          </Link>
        </div>
      );
    } else if (!guild.icon) {
      const nombres = guild.name.split(" ");
      let name: any;
      const name2 = nombres.filter((names: any) => {
        if (name) {
          name = name + names.charAt(0);
        } else {
          name = names.charAt(0);
        }
      });
      return (
        <div>
          <Box
            as="button"
            borderRadius="md"
            bg="white"
            p="7"
            w="70%"
            px={4}
            h={8}
          >
            <Circle size="34px" bg="#23272A" color="white">
              <div>{name}</div>
            </Circle>
          </Box>
          <li> {guild.name} </li>
          <Link
            href={`https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmenu&permissions=2147483647&client_id=818892469130362890&guild_id=${guild.id}`}
          >
            {" "}
            Invite Bot
          </Link>
        </div>
      );
    }
  }
  return (
    <div>
      {guilds.included.map((guild: any) => (
        <div>{included(guild)}</div>
      ))}
      {guilds.excluded.map((guild: any) => (
        <div>{excluded(guild)}</div>
      ))}
    </div>
  );
}
