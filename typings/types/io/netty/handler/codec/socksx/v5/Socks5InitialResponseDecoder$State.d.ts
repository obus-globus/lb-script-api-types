import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5InitialResponseDecoder$State extends Enum<Socks5InitialResponseDecoder$State> {
    static FAILURE: Socks5InitialResponseDecoder$State;
    static INIT: Socks5InitialResponseDecoder$State;
    static SUCCESS: Socks5InitialResponseDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Socks5InitialResponseDecoder$State;
    static values(): Socks5InitialResponseDecoder$State[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}