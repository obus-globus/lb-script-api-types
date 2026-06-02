import type { TextFormatting } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface SerializerUnknownHandling extends Object{
    handle(arg0: TextFormatting, arg1: StringBuilder): TextFormatting;
}