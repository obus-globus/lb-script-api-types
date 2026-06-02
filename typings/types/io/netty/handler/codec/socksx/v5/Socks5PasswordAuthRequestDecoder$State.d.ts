import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5PasswordAuthRequestDecoder$State extends Enum<Socks5PasswordAuthRequestDecoder$State> {
    static FAILURE: Socks5PasswordAuthRequestDecoder$State;
    static INIT: Socks5PasswordAuthRequestDecoder$State;
    static SUCCESS: Socks5PasswordAuthRequestDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Socks5PasswordAuthRequestDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}