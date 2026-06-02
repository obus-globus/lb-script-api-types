import type { DialogInput } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/DialogInput.d.ts'
import type { InputType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/InputType.d.ts'
import type { NumberRangeInput$Range } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/NumberRangeInput$Range.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NumberRangeInput extends Object implements DialogInput {
    constructor(arg0: TextComponent, arg1: NumberRangeInput$Range)
    constructor(arg0: number, arg1: TextComponent, arg2: string, arg3: NumberRangeInput$Range)
    readonly label: TextComponent;
    readonly labelFormat: string;
    readonly range: NumberRangeInput$Range;
    readonly type: InputType;
    readonly width: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getLabel(): TextComponent;
    getLabelFormat(): string;
    getRange(): NumberRangeInput$Range;
    getType(): InputType;
    getWidth(): number;
    hashCode(): number;
    setLabel(arg0: TextComponent): void;
    setLabelFormat(arg0: string): void;
    setRange(arg0: NumberRangeInput$Range): void;
    setWidth(arg0: number): void;
    toString(): string;
}