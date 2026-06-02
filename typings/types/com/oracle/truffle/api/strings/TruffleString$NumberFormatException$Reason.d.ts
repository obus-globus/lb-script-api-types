import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TruffleString$NumberFormatException$Reason extends Enum<TruffleString$NumberFormatException$Reason> {
    static EMPTY: TruffleString$NumberFormatException$Reason;
    static INVALID_CODEPOINT: TruffleString$NumberFormatException$Reason;
    static LONE_SIGN: TruffleString$NumberFormatException$Reason;
    static MALFORMED_HEX_ESCAPE: TruffleString$NumberFormatException$Reason;
    static MULTIPLE_DECIMAL_POINTS: TruffleString$NumberFormatException$Reason;
    static OVERFLOW: TruffleString$NumberFormatException$Reason;
    static UNSUPPORTED_RADIX: TruffleString$NumberFormatException$Reason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleString$NumberFormatException$Reason;
    static values(): (Object | null)[];
    private constructor(message: string)
    readonly message: string;
    getMessage(): string;
    name(): "EMPTY" | "INVALID_CODEPOINT" | "LONE_SIGN" | "OVERFLOW" | "MALFORMED_HEX_ESCAPE" | "MULTIPLE_DECIMAL_POINTS" | "UNSUPPORTED_RADIX";
}