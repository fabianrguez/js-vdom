import { transformJSX } from '../vdom';
import './Button.css';

export function Button({ label, onClick = () => {} }) {
  return <button onClick={onClick}>{label}</button>;
}
