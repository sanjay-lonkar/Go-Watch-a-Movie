const Textarea = (props) => {
    return (
        <div className="mb-3">
        <label htmlFor="description" className="form-label">
            {props.title}
        </label>
        <textarea 
            className="form-control"
            id={props.name}
            name={props.name}
            rows={props.rows}
            onChange={props.handleChange}
            value={props.value}
        />
        </div>
    );
};

export default Textarea;