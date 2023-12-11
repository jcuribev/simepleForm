const Options = (props: any) => {
  return (
    <select
      name={props.title}
      onChange={props.onChange}
      disabled={props.disabled}
    >
      {!props.disabled ? (
        <option value="" disabled hidden>
          Select...
        </option>
      ) : (
        <option value="">Loading...</option>
      )}
      {props.options.map((option: any) => {
        return (
          <option key={option.title} value={option.title}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default Options;
