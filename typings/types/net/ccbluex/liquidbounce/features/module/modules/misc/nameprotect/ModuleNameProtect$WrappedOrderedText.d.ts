import type { Int2IntFunction } from '../../../../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModuleNameProtect$MappedCharacter } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect$MappedCharacter.d.ts'
import type { Style } from '../../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ModuleNameProtect$WrappedOrderedText extends Object implements FormattedCharSequence {
    static EMPTY: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static backward(paramplainText: string, paramstyle: Style): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static backward(paramplainText: string, paramstyle: Style, parammodifier: (param0: number) => number): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static codepoint(paramcodepoint: number, paramstyle: Style): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static composite(): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static composite(paramparts: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[]): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static composite(parampart: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static composite(paramfirst: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, paramsecond: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static composite(paramparts: (Object | null)[]): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static decorateOutput(paramoutput: (param0: number, param1: Style, param2: number) => boolean, parammodifier: (param0: number) => number): (param0: number, param1: Style, param2: number) => boolean;
    static forward(paramplainText: string, paramstyle: Style): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static forward(paramplainText: string, paramstyle: Style, parammodifier: (param0: number) => number): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static fromList(parampartCopy: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[]): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    static fromPair(paramfirst: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, paramsecond: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    constructor(mappedCharacters: ModuleNameProtect$MappedCharacter[])
    mappedCharacters: ModuleNameProtect$MappedCharacter[];
    accept(visitor: (param0: number, param1: Style, param2: number) => boolean): boolean;
}