import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5CommandResponseDecoder$State extends Enum<Socks5CommandResponseDecoder$State> {
    static FAILURE: Socks5CommandResponseDecoder$State;
    static INIT: Socks5CommandResponseDecoder$State;
    static SUCCESS: Socks5CommandResponseDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks5CommandResponseDecoder$State;
    static values(): Socks5CommandResponseDecoder$State[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}