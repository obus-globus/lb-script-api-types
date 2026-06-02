import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks4ClientDecoder$State extends Enum<Socks4ClientDecoder$State> {
    static FAILURE: Socks4ClientDecoder$State;
    static START: Socks4ClientDecoder$State;
    static SUCCESS: Socks4ClientDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks4ClientDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "START" | "SUCCESS" | "FAILURE";
}