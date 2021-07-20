import { TextField } from "@material-ui/core";
import { useController, Control } from "react-hook-form";

type InputProps = {
  name: string;
  control: Control;
  label: string;
  message?: string;
  classStyle?: string;
  type?: string;
};
export function Input({
  control,
  name,
  label,
  message,
  classStyle,
  type,
}: InputProps) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: message,
    },
    defaultValue: "",
  });

  return (
    <TextField
      {...inputProps}
      type={type}
      inputRef={ref}
      label={label}
      error={!!error}
      helperText={error ? error.message : null}
      className={classStyle}
    />
  );
}
