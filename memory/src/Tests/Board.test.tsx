import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from "enzyme";
import Board from '../Components/Board';
import { Card } from "../Components/Card";


configure({ adapter: new Adapter() });

describe("Board", () => {
  it("renders correctly", () => {
    shallow(<Board contributors={[]} />);
  });

  it("Board has 4 divs", () => {
    const wrapper = shallow(<Board contributors={[{ avatar_url: "1" }, { avatar_url: "2" }, { avatar_url: "3" }, { avatar_url: "4" }, { avatar_url: "5" }, { avatar_url: "6" }]} />);
    expect(wrapper.find("div").length).toEqual(4);
  });
  it('renders 12 Card components', () => {
    const wrapper = mount(<Board contributors={[{ avatar_url: "1" }, { avatar_url: "2" }, { avatar_url: "3" }, { avatar_url: "4" }, { avatar_url: "5" }, { avatar_url: "6" }]} />);
    expect(wrapper.find(Card).length).toEqual(12)
  });
});