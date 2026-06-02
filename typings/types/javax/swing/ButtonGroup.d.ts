import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { AbstractButton } from '../../javax/swing/AbstractButton.d.ts'
import type { ButtonModel } from '../../javax/swing/ButtonModel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ButtonGroup extends Object implements Serializable {
    constructor()
    // private buttons: AbstractButton[];
    selection: ButtonModel;
    add(arg0: AbstractButton): void;
    clearSelection(): void;
    getButtonCount(): number;
    getElements(): Enumeration<AbstractButton>;
    getSelection(): ButtonModel;
    isSelected(arg0: ButtonModel): boolean;
    remove(arg0: AbstractButton): void;
    setSelected(arg0: ButtonModel, arg1: boolean): void;
}