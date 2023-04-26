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
  let url = "http://127.0.0.1:5000/shortUrls";

  const formik = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: () => {
      // alert(JSON.stringify(values, null, 2));
      axios(url, {
        method: "POST",
        url: formik.initialValues.url,
      })
        .then((response) => console.log(response.data))
        .catch((error) => {
          throw error;
        });
      console.log("clicked");
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
            <Input
              name="url"
              required
              placeholder="www.example.com"
              onChange={() => formik.handleChange}
              onBlur={() => formik.handleBlur}
            />
          </Block>
          <Block marginTop={"scale600"}>
            <Button type="submit" onClick={() => formik.handleSubmit()}>
              post
            </Button>
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
