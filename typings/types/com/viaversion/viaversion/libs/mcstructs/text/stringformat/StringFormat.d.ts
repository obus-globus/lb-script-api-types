import type { Style } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextFormatting } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { ResolvedFormatting } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/ResolvedFormatting.d.ts'
import type { TextStringReader } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/TextStringReader.d.ts'
import type { ColorHandling } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/handling/ColorHandling.d.ts'
import type { DeserializerUnknownHandling } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/handling/DeserializerUnknownHandling.d.ts'
import type { SerializerUnknownHandling } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/stringformat/handling/SerializerUnknownHandling.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class StringFormat extends Object {
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
    // private colorChar: string;
    canRead(arg0: TextStringReader): boolean;
    canWrite(arg0: TextFormatting): boolean;
    convertTo(arg0: string, arg1: StringFormat): string;
    fromString(arg0: string, arg1: ColorHandling, arg2: (param0: ResolvedFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting): TextComponent;
    fromString(arg0: string, arg1: ColorHandling, arg2: (param0: ResolvedFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting, arg3: boolean): TextComponent;
    matches(arg0: TextStringReader): boolean;
    prependStyle(arg0: string, arg1: Style, arg2: (param0: TextFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting): string;
    read(arg0: TextStringReader): TextFormatting;
    resolve(arg0: TextStringReader): ResolvedFormatting;
    shouldResetAtEnd(): boolean;
    split(arg0: string, arg1: string, arg2: ColorHandling, arg3: (param0: TextFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting, arg4: (param0: ResolvedFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting): string[];
    styleAt(arg0: string, arg1: number, arg2: ColorHandling, arg3: (param0: ResolvedFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting): Style;
    toString(): string;
    toString(arg0: TextComponent, arg1: ColorHandling, arg2: (param0: TextFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting): string;
    toString(arg0: TextComponent, arg1: ColorHandling, arg2: (param0: TextFormatting, param1: StringBuilder) => com.viaversion.viaversion.libs.mcstructs.text.TextFormatting, arg3: boolean): string;
    write(arg0: StringBuilder, arg1: TextFormatting): void;
}