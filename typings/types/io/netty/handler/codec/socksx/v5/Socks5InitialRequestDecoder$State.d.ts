import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5InitialRequestDecoder$State extends Enum<Socks5InitialRequestDecoder$State> {
    static FAILURE: Socks5InitialRequestDecoder$State;
    static INIT: Socks5InitialRequestDecoder$State;
    static SUCCESS: Socks5InitialRequestDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Socks5InitialRequestDecoder$State;
    static values(): Socks5InitialRequestDecoder$State[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}