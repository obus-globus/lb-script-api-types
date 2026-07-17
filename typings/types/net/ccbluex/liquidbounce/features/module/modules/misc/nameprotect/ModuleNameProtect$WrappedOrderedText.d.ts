import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModuleNameProtect$MappedCharacter } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect$MappedCharacter.d.ts'
import type { Style } from '../../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ModuleNameProtect$WrappedOrderedText extends Object implements FormattedCharSequence {
    static EMPTY: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    constructor(mappedCharacters: ModuleNameProtect$MappedCharacter[])
    mappedCharacters: ModuleNameProtect$MappedCharacter[];
    accept(visitor: (param0: number, param1: Style, param2: number) => boolean): boolean;
}