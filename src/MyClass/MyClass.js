const MyClass = (props) => {
  return (
    <div>
      안녕, 제 이름은{props.name}입나다.
      <br />
      children 값은 {props.children} 입니다.
    </div>
  );
};
MyClass.defaultProps = {
  name: "기본 이름"
};

export default MyClass;
