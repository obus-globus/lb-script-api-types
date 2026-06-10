import type { Int2IntFunction } from '../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormattedText } from '../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class SubStringSource extends Object {
    static create(paramtext: FormattedText): SubStringSource;
    static create(paramtext: FormattedText, paramreverseCharModifier: (param0: number) => number, paramshaper: (param0: string) => Object | null): SubStringSource;
    private constructor(plainText: string, charStyles: Style[], reverseCharModifier: (param0: number) => number)
    // private charStyles: Style[];
    readonly plainText: string;
    // private reverseCharModifier: (param0: number) => number;
    getPlainText(): string;
    substring(start: number, length: number, reverse: boolean): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
}