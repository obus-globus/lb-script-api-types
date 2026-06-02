import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5InitialResponseDecoder$State extends Enum<Socks5InitialResponseDecoder$State> {
    static FAILURE: Socks5InitialResponseDecoder$State;
    static INIT: Socks5InitialResponseDecoder$State;
    static SUCCESS: Socks5InitialResponseDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks5InitialResponseDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}