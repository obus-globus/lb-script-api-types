import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export interface Format$StringBuf extends Object{
    append(arg0: StringBuffer): Format$StringBuf;
    append(arg0: string): Format$StringBuf;
    append(arg0: string[], arg1: number, arg2: number): Format$StringBuf;
    append(arg0: CharSequence, arg1: number, arg2: number): Format$StringBuf;
    append(arg0: number): Format$StringBuf;
    asStringBuffer(): StringBuffer;
    asStringBuilder(): StringBuilder;
    isProxyStringBuilder(): boolean;
    length(): number;
    substring(arg0: number): string;
    substring(arg0: number, arg1: number): string;
}