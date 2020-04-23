import React from "react";
import App from '../../App'
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Notification, Confirmation } from "..";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("Confirmation", () => {
  test("Should render to markup", () => {
    const wrap = shallow(
      <Confirmation message={"Would you like a slice of pie?"} />
    );
    expect(wrap.html()).toContain(`<p>Would you like a slice of pie?</p>`);
  });

  test("Should be a composite component", () => {
    // const wrap = shallow(
    //   <Confirmation message={"Would you like a slice of pie?"} />
    // );
    expect(Confirmation).toBeInstanceOf(Function)
  });

  test("Should render a notification", () => {
    const wrap = shallow(<Confirmation message={"Still want the pie?"} />);
    expect(wrap.props()).not.toBeNull();
  });

  test("should render accept button", () => {
    const wrap = shallow(
      <Confirmation
        message={"Still want the pie?"}
        accept={() => {}}
      />
    );
    expect(wrap.html()).toContain("btn btn-primary");
  });

  test("should render decline button", () => {
    const wrap = shallow(
      <Confirmation
        message={"Still want the pie?"}
        decline={() => {}}
      />
    );
    expect(wrap.html()).toContain("btn btn-danger");
  });

  test("should hide confirmation when accept button is clicked", () => {
    const wrap = shallow(
      <Confirmation
        message={"Still want the pie?"}
        accept={() => null}
      />
    );
    wrap.find('.btn.btn-primary').simulate("click");
    expect(wrap.isEmptyRender()).toEqual(true)
  });

  test("should hide confirmation when decline button is clicked", () => {
    const wrap = shallow(
      <Confirmation
        message={"Still want the pie?"}
        decline={() => {}}
      />
    );
    wrap.find('.btn.btn-danger').simulate("click");
    expect(wrap.isEmptyRender()).toEqual(true)

  });
});

describe("Notification", () => {
  test("should contain the message I pass in", function() {
    let message = "Notification to the end-user!";
    let type = "";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.html()).toContain(message);
  });

  test("should contain no component when no message is provided", function() {
    let message = "";
    let type = "";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.find(Notification)).toHaveLength(0);
  });

  test("should use default *alert alert-info* class when no type is provided", function() {
    const message = "Notification to the end-user!";
    const type = "";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.html()).toContain("alert alert-info");
  });

  test("should pass *alert alert-success* class when type: success  is provided", function() {
    const message = "Notification to the end-user!";
    const type = "success";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.html()).toContain("alert alert-success");
  });

  test("should pass *alert alert-info* class when type: message  is provided", function() {
    const message = "Notification to the end-user!";
    const type = "message";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.html()).toContain("alert alert-info");
  });

  test("should pass *alert alert-warning* class when type: caution is provided", function() {
    const message = "Notification to the end-user!";
    const type = "caution";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.html()).toContain("alert alert-warning");
  });

  test("should pass *alert alert-danger* class when type: error is provided", function() {
    const message = "Notification to the end-user!";
    const type = "error";
    const app = shallow(<App notification={{ message, type }} />);
    expect(app.html()).toContain("alert alert-danger");
  });
});
