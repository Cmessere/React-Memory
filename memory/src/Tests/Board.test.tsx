import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Board from '../Components/Board';


configure({ adapter: new Adapter() });

describe("Board", () => {
 it("renders correctly", () => {
   shallow(<Board contributors={[]} />);
 });
});