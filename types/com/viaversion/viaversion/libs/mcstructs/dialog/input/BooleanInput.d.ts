import type { DialogInput } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/DialogInput.d.ts'
import type { InputType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/InputType.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BooleanInput extends Object implements DialogInput {
    constructor(arg0: TextComponent)
    constructor(arg0: TextComponent, arg1: boolean, arg2: string, arg3: string)
    readonly initial: boolean;
    readonly label: TextComponent;
    readonly onFalse: string;
    readonly onTrue: string;
    readonly type: InputType;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getLabel(): TextComponent;
    getOnFalse(): string;
    getOnTrue(): string;
    getType(): InputType;
    hashCode(): number;
    isInitial(): boolean;
    setInitial(arg0: boolean): void;
    setLabel(arg0: TextComponent): void;
    setOnFalse(arg0: string): void;
    setOnTrue(arg0: string): void;
    toString(): string;
}