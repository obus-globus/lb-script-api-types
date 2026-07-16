import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5PrivateAuthResponseDecoder$State extends Enum<Socks5PrivateAuthResponseDecoder$State> {
    static FAILURE: Socks5PrivateAuthResponseDecoder$State;
    static INIT: Socks5PrivateAuthResponseDecoder$State;
    static SUCCESS: Socks5PrivateAuthResponseDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks5PrivateAuthResponseDecoder$State;
    static values(): Socks5PrivateAuthResponseDecoder$State[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}