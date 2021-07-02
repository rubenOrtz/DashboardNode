import React from "react";
import { Formik } from "formik";
import { Input, Button, Tooltip, useToast, Select } from "@chakra-ui/react";
type C = {
  config: any;
  updatePrefix?: any;
  user: any;
  updateChannelsWelcome: any;
};

export function DashboardMenu({
  config,
  updatePrefix,
  updateChannelsWelcome,
}: C) {
  const toast = useToast();
  console.log(config);
  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <div>
      <Formik
        initialValues={{ prefix: config.prefix }}
        onSubmit={(prefix) =>
          updatePrefix(prefix).then(() => {
            console.log(prefix);
            if (prefix.prefix) {
              toast({
                position: "bottom-right",
                title: "Data saved",
                description: `We changed your prefix to: ${prefix.prefix}`,
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            } else {
              toast({
                position: "bottom-right",
                title: "Whats wrong with u",
                description: `I think ${config.getGuildConfig.prefix} is the already prefix ._.`,
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            }
          })
        }
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Input
              type="text"
              name="prefix"
              onChange={props.handleChange}
              defaultValue={config.getGuildConfig.prefix}
            />
            <Tooltip label="You need to update guild prefix?">
              <Button colorScheme="teal" variant="ghost" type="submit">
                {" "}
                Update prefix{" "}
              </Button>
            </Tooltip>
          </form>
        )}
      </Formik>
      <Formik
        initialValues={{
          LogsChannel: config.getGuildConfig.welcomechannelid,
        }}
        onSubmit={async (values) => {
          const datasaved = values.LogsChannel.split(",");
          updateChannelsWelcome(datasaved[0]).then((output: any) => {
            console.log("find2");
            console.log(values);

            toast({
              position: "bottom-right",
              title: "Data saved",
              description: `We changed your welcome channel to ${datasaved[1]}`,
              status: "success",
              duration: 4000,
              isClosable: true,
            });
          });
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Select name="LogsChannel" onChange={props.handleChange}>
              {config.getChannels.map((channel: any) => {
                if (channel.type !== "4" && channel.type !== "2") {
                  return (
                    <option
                      value={[channel.id, channel.name]}
                      selected={
                        channel.id === config.getGuildConfig.welcomechannelid
                      }
                    >
                      {channel.name}
                    </option>
                  );
                }
              })}
            </Select>
            <Tooltip label="You need to update guild prefix?">
              <Button colorScheme="teal" variant="ghost" type="submit">
                {" "}
                Update Welcome Channel{" "}
              </Button>
            </Tooltip>
          </form>
        )}
      </Formik>
    </div>
  );
}
