import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksInitRequestDecoder$State extends Enum<SocksInitRequestDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksInitRequestDecoder$State;
    static READ_AUTH_SCHEMES: SocksInitRequestDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SocksInitRequestDecoder$State;
    static values(): SocksInitRequestDecoder$State[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_AUTH_SCHEMES";
}