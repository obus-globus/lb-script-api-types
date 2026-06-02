import type { DialogInput } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/DialogInput.d.ts'
import type { InputType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/InputType.d.ts'
import type { TextInput$MultilineOptions } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/TextInput$MultilineOptions.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TextInput extends Object implements DialogInput {
    constructor(arg0: TextComponent)
    constructor(arg0: number, arg1: TextComponent, arg2: boolean, arg3: string, arg4: number, arg5: TextInput$MultilineOptions)
    readonly initial: string;
    readonly label: TextComponent;
    readonly labelVisible: boolean;
    readonly maxLength: number;
    readonly multiline: TextInput$MultilineOptions;
    readonly type: InputType;
    readonly width: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getInitial(): string;
    getLabel(): TextComponent;
    getMaxLength(): number;
    getMultiline(): TextInput$MultilineOptions;
    getType(): InputType;
    getWidth(): number;
    hashCode(): number;
    isLabelVisible(): boolean;
    setInitial(arg0: string): void;
    setLabel(arg0: TextComponent): void;
    setLabelVisible(arg0: boolean): void;
    setMaxLength(arg0: number): void;
    setMultiline(arg0: TextInput$MultilineOptions): void;
    setWidth(arg0: number): void;
    toString(): string;
}