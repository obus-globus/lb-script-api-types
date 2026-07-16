import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EncodingPatternConverter$EscapeFormat extends Enum<EncodingPatternConverter$EscapeFormat> {
    static CRLF: EncodingPatternConverter$EscapeFormat;
    static HTML: EncodingPatternConverter$EscapeFormat;
    static JSON: EncodingPatternConverter$EscapeFormat;
    static XML: EncodingPatternConverter$EscapeFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EncodingPatternConverter$EscapeFormat;
    static values(): EncodingPatternConverter$EscapeFormat[];
    constructor(arg2: any)
    escape(toAppendTo: StringBuilder, start: number): void;
    name(): "HTML" | "JSON" | "CRLF" | "XML";
}