import axios from "axios";
import { BaseProvider, LightTheme } from "baseui";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { SIZE, Table } from "baseui/table-semantic";
import { HeadingLarge } from "baseui/typography";
import { useFormik } from "formik";
import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import "./App.css";

const engine = new Styletron();
function App() {
  let BaseUrl = "http://127.0.0.1:5000";
  const formik = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: () => {
      console.log("-------POST--------");
      axios.post(
        `${BaseUrl}/shortUrls`,
        {
          url: formik.values.url,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("------GET-----");
      let response = axios.get(`${BaseUrl}/`);
      console.log(typeof response);
    },
  });

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Block
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Block>
            <HeadingLarge>URL Shrinker</HeadingLarge>
          </Block>
          <Block>
            <form onSubmit={formik.handleSubmit}>
              <Input
                autoComplete="off"
                name="url"
                onChange={formik.handleChange}
                placeholder="www.example.com"
                required
                value={formik.values.url}
              />
              <Block marginTop={"scale600"}>
                <Button type="submit">post</Button>
              </Block>
            </form>
          </Block>
          <Block marginTop={"scale1200"}>
            <Table
              columns={["FullUrl", "ShortUrl", "Clicks"]}
              data={[
                ["www.verylongURrrrrrl.com", "123456", "100 "],
                ["www.verylongURrrrrrl.com", "123456", "100 "],
              ]}
              size={SIZE.compact}
            />
          </Block>
        </Block>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
