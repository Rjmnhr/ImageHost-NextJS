import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const LoaderSpin = () => <Spin indicator={antIcon} />;
export default LoaderSpin;
