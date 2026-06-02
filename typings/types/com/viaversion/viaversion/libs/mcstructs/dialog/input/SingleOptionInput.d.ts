import type { DialogInput } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/DialogInput.d.ts'
import type { InputType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/InputType.d.ts'
import type { SingleOptionInput$Entry } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/SingleOptionInput$Entry.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SingleOptionInput extends Object implements DialogInput {
    constructor(arg0: number, arg1: SingleOptionInput$Entry[], arg2: TextComponent, arg3: boolean)
    constructor(arg0: SingleOptionInput$Entry[], arg1: TextComponent)
    readonly label: TextComponent;
    readonly labelVisible: boolean;
    readonly options: SingleOptionInput$Entry[];
    readonly type: InputType;
    readonly width: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getLabel(): TextComponent;
    getOptions(): SingleOptionInput$Entry[];
    getType(): InputType;
    getWidth(): number;
    hashCode(): number;
    isLabelVisible(): boolean;
    setLabel(arg0: TextComponent): void;
    setLabelVisible(arg0: boolean): void;
    setOptions(arg0: SingleOptionInput$Entry[]): void;
    setWidth(arg0: number): void;
    toString(): string;
}