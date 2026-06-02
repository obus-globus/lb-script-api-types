import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class HttpPostBodyUtil$TransferEncodingMechanism extends Enum<HttpPostBodyUtil$TransferEncodingMechanism> {
    static BINARY: HttpPostBodyUtil$TransferEncodingMechanism;
    static BIT7: HttpPostBodyUtil$TransferEncodingMechanism;
    static BIT8: HttpPostBodyUtil$TransferEncodingMechanism;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpPostBodyUtil$TransferEncodingMechanism;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private value: string;
    toString(): string;
    value(): string;
    name(): "BIT7" | "BIT8" | "BINARY";
}