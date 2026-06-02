import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksInitRequestDecoder$State extends Enum<SocksInitRequestDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksInitRequestDecoder$State;
    static READ_AUTH_SCHEMES: SocksInitRequestDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocksInitRequestDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_AUTH_SCHEMES";
}