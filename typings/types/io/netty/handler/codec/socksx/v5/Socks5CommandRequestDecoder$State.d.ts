import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5CommandRequestDecoder$State extends Enum<Socks5CommandRequestDecoder$State> {
    static FAILURE: Socks5CommandRequestDecoder$State;
    static INIT: Socks5CommandRequestDecoder$State;
    static SUCCESS: Socks5CommandRequestDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Socks5CommandRequestDecoder$State;
    static values(): Socks5CommandRequestDecoder$State[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}