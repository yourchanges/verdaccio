/**
 * @prettier
 * @flow
 */

export interface IProps {
  suggestions: {
    label: string,
  };
  color?: string;
  value: string;
  placeholder?: string;
  startAdornment?: JSX.Element;
  disableUnderline?: boolean;
  onChange: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void;
  onSuggestionsFetch: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void;
  onCleanSuggestions: () => void;
}
