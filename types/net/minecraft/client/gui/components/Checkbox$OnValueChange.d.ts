import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Checkbox } from '../../../../../net/minecraft/client/gui/components/Checkbox.d.ts'
export interface Checkbox$OnValueChange extends Object{
    onValueChange(checkbox: Checkbox, value: boolean): void;
}