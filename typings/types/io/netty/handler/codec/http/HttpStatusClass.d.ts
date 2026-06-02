import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpStatusClass extends Enum<HttpStatusClass> {
    static CLIENT_ERROR: HttpStatusClass;
    static INFORMATIONAL: HttpStatusClass;
    static REDIRECTION: HttpStatusClass;
    static SERVER_ERROR: HttpStatusClass;
    static SUCCESS: HttpStatusClass;
    static UNKNOWN: HttpStatusClass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): HttpStatusClass;
    static valueOf(paramarg0: CharSequence): HttpStatusClass;
    static valueOf(paramarg0: string): HttpStatusClass;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number, arg4: string)
    // private defaultReasonPhrase: AsciiString;
    // private max: number;
    // private min: number;
    contains(arg0: number): boolean;
    defaultReasonPhrase(): AsciiString;
    name(): "INFORMATIONAL" | "SUCCESS" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "UNKNOWN";
}