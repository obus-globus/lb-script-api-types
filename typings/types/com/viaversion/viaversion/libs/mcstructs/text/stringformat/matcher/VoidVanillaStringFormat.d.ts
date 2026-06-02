import type { TextFormatting } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { StringFormat } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/StringFormat.d.ts'
import type { TextStringReader } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/TextStringReader.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
export class VoidVanillaStringFormat extends StringFormat {
    static adventure(): StringFormat;
    static adventure(paramarg0: string): StringFormat;
    static ansi(): StringFormat;
    static ansi(paramarg0: boolean): StringFormat;
    static bungee(): StringFormat;
    static bungee(paramarg0: string): StringFormat;
    static vanilla(): StringFormat;
    static vanilla(paramarg0: boolean): StringFormat;
    static vanilla(paramarg0: string): StringFormat;
    static vanilla(paramarg0: string, paramarg1: boolean): StringFormat;
    constructor(arg0: string)
    canWrite(arg0: TextFormatting): boolean;
    matches(arg0: TextStringReader): boolean;
    read(arg0: TextStringReader): TextFormatting;
    write(arg0: StringBuilder, arg1: TextFormatting): void;
}