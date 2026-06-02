import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
export class OptionsList$OptionInstanceWidget extends Record {
    constructor(widget: AbstractWidget)
    constructor(widget: AbstractWidget, optionInstance: OptionInstance<Object>)
    // private optionInstance: OptionInstance<Object>;
    // private widget: AbstractWidget;
    equals(o: Object | null): boolean;
    hashCode(): number;
    optionInstance(): OptionInstance<Object>;
    toString(): string;
    widget(): AbstractWidget;
}