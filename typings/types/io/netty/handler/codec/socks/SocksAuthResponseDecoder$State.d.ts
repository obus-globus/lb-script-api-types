import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksAuthResponseDecoder$State extends Enum<SocksAuthResponseDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksAuthResponseDecoder$State;
    static READ_AUTH_RESPONSE: SocksAuthResponseDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SocksAuthResponseDecoder$State;
    static values(): SocksAuthResponseDecoder$State[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_AUTH_RESPONSE";
}