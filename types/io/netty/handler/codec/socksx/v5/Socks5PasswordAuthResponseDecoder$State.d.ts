import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5PasswordAuthResponseDecoder$State extends Enum<Socks5PasswordAuthResponseDecoder$State> {
    static FAILURE: Socks5PasswordAuthResponseDecoder$State;
    static INIT: Socks5PasswordAuthResponseDecoder$State;
    static SUCCESS: Socks5PasswordAuthResponseDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks5PasswordAuthResponseDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}