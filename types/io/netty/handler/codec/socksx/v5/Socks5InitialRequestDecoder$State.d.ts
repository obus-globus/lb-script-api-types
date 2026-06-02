import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5InitialRequestDecoder$State extends Enum<Socks5InitialRequestDecoder$State> {
    static FAILURE: Socks5InitialRequestDecoder$State;
    static INIT: Socks5InitialRequestDecoder$State;
    static SUCCESS: Socks5InitialRequestDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks5InitialRequestDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}