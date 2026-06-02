import type { DialogAction } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/DialogAction.d.ts'
import type { TextComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ActionButton extends Object {
    constructor(arg0: TextComponent, arg1: TextComponent, arg2: number)
    constructor(arg0: TextComponent, arg1: TextComponent, arg2: number, arg3: DialogAction)
    constructor(arg0: TextComponent, arg1: number)
    constructor(arg0: TextComponent, arg1: number, arg2: DialogAction)
    readonly action: DialogAction;
    readonly label: TextComponent;
    readonly tooltip: TextComponent;
    readonly width: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getAction(): DialogAction;
    getLabel(): TextComponent;
    getTooltip(): TextComponent;
    getWidth(): number;
    hashCode(): number;
    setAction(arg0: DialogAction): void;
    setLabel(arg0: TextComponent): void;
    setTooltip(arg0: TextComponent): void;
    setWidth(arg0: number): void;
    toString(): string;
}