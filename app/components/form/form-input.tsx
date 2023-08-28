import {Text, TextInput, TextInputProps, View} from 'react-native';
import {useController, UseControllerProps} from 'react-hook-form';

type K = Record<string, unknown>;

export type FormInputProps<T extends K> = UseControllerProps<T> & {
  label?: string;
  helperText?: string;
  placeholder?: string;
  inputProps?: TextInputProps;
  className?: string;
};

export function FormInput<T extends K>(props: FormInputProps<T>) {
  const {label, placeholder, helperText, className, inputProps, ...rest} =
    props;
  const {field, fieldState} = useController(rest);

  return (
    <View className={`mb-4 ${className}`}>
      {!!label && <Text className="text-gray-600 pb-1">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        {...inputProps}
        ref={field.ref}
        value={field.value as string}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        className={`border border-gray-400 rounded-md p-3 bg-white ${inputProps?.className}`}
      />
      {!!helperText && (
        <Text className="text-xs text-gray-400">{helperText}</Text>
      )}
      {fieldState.invalid && (
        <Text className="text-red-600 text-xs">
          {fieldState.error?.message}
        </Text>
      )}
    </View>
  );
}
