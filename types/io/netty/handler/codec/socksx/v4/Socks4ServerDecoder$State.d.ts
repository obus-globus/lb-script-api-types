import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks4ServerDecoder$State extends Enum<Socks4ServerDecoder$State> {
    static FAILURE: Socks4ServerDecoder$State;
    static READ_DOMAIN: Socks4ServerDecoder$State;
    static READ_USERID: Socks4ServerDecoder$State;
    static START: Socks4ServerDecoder$State;
    static SUCCESS: Socks4ServerDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks4ServerDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "START" | "READ_USERID" | "READ_DOMAIN" | "SUCCESS" | "FAILURE";
}