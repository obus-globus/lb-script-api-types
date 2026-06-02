import type { Checkbox } from '../../java/awt/Checkbox.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CheckboxGroup extends Object implements Serializable {
    constructor()
    selectedCheckbox: Checkbox;
    getCurrent(): Checkbox;
    getSelectedCheckbox(): Checkbox;
    setCurrent(arg0: Checkbox): void;
    setSelectedCheckbox(arg0: Checkbox): void;
    toString(): string;
}