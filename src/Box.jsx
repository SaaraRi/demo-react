import './Box.css';

const Box = (props) => {
    return (
        <div className="box">
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Title: {props.title}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

    export default Box;