import type { TextTag } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TextTag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../../../net/minecraft/ChatFormatting.d.ts'
export class SimpleTags extends Object {
    static color(paramarg0: string, paramarg1: string[], paramarg2: number): TextTag;
    static color(paramarg0: string, paramarg1: string[], paramarg2: ChatFormatting): TextTag;
    constructor()
}