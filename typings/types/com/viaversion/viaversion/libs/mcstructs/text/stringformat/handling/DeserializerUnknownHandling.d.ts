import type { TextFormatting } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { ResolvedFormatting } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/ResolvedFormatting.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface DeserializerUnknownHandling extends Object{
    handle(arg0: ResolvedFormatting, arg1: StringBuilder): TextFormatting;
}