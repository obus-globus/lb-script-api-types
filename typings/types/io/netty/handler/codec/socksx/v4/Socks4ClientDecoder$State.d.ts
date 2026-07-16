import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks4ClientDecoder$State extends Enum<Socks4ClientDecoder$State> {
    static FAILURE: Socks4ClientDecoder$State;
    static START: Socks4ClientDecoder$State;
    static SUCCESS: Socks4ClientDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Socks4ClientDecoder$State;
    static values(): Socks4ClientDecoder$State[];
    private constructor()
    name(): "START" | "SUCCESS" | "FAILURE";
}