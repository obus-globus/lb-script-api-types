import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksInitResponseDecoder$State extends Enum<SocksInitResponseDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksInitResponseDecoder$State;
    static READ_PREFERRED_AUTH_TYPE: SocksInitResponseDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SocksInitResponseDecoder$State;
    static values(): SocksInitResponseDecoder$State[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_PREFERRED_AUTH_TYPE";
}