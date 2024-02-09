'use client'

import Button, { primaryButtonProps, secondaryButtonProps } from "@/components/Button";
import Children from "@/components/Children";
import Counter from "@/components/Counter";
import DestructureProps from "@/components/DestructureProps";
import ElementWrapper from "@/components/ElementWrapper";
import Form from "@/components/Form";
import ReuseableCom1 from "@/components/ReuseableCom1";
import ReuseableCom2 from "@/components/ReuseableCom2";
import User from "@/components/User";
import UserAgain from "@/components/UserAgain";
import UserAgain2 from "@/components/UserAgain2";

export default function Home() {
  return (
    <section>
      <User name="alex" age={20}></User>
      <DestructureProps name="john" age={23}></DestructureProps>
      <UserAgain name="Amy" age={18}></UserAgain>
      <UserAgain2 name="donald" age={25}></UserAgain2>
      <hr></hr>
      <Children>
        <p>This is a children</p>
      </Children>
      <hr></hr>
      <ReuseableCom1
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
      ></ReuseableCom1>
      <ReuseableCom2
        username="Huxn"
        email="huxn@gmail.com"
        age={21}
        location={["Mars", "Unknown"]}
        admin="yes"
      ></ReuseableCom2>
      <hr></hr>
      <Counter></Counter>
      <hr></hr> <br></br>
      <Form></Form>
      <hr></hr> <br></br>
      <ElementWrapper elementType="div" className="box">
         <p>This is a div element with a class name of Box</p>
      </ElementWrapper>

      <ElementWrapper elementType="h1" onClick={() => alert('h1 clicked')}>
          Header Text
      </ElementWrapper>

      <ElementWrapper elementType="button" onClick={() => alert('Button clicked')}>
          Click Me
      </ElementWrapper>
      <hr></hr> <br></br>

      <Button {...primaryButtonProps}></Button>
      <Button {...secondaryButtonProps}></Button>
    </section>
  );
}
