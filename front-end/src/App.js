// import axios from "axios";
import { BaseProvider, LightTheme } from "baseui";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { Table, SIZE } from "baseui/table-semantic";
import { HeadingLarge } from "baseui/typography";
import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import "./App.css";
const engine = new Styletron();
function App() {
  // const [name, setName] = useState("nsbchjsbf");
  // let url = "http://127.0.0.1:5000/shortUrls";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   axios(url, {
  //     method: "POST",
  //     name:name
  //   })
  //     .then(response => response.data)
  //     .catch(error => {
  //       throw error;
  //     });
  //   console.log("clicked");
  // };
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
            <Input placeholder="www.example.com" />
          </Block>
          <Block marginTop={"50px"}>
            <Button>post</Button>
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
