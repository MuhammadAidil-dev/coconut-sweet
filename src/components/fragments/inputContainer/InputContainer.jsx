const InputContainer = ({ label, type, id, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {type === 'number' ? (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="outline-none border border-primary rounded-md py-2 px-2 text-xs"
          required
          autoComplete="off"
          min={0}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="outline-none border border-primary rounded-md py-2 px-2 text-xs"
          required
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default InputContainer;
