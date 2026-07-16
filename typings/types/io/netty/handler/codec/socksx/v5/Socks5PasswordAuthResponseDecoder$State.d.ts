import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Socks5PasswordAuthResponseDecoder$State extends Enum<Socks5PasswordAuthResponseDecoder$State> {
    static FAILURE: Socks5PasswordAuthResponseDecoder$State;
    static INIT: Socks5PasswordAuthResponseDecoder$State;
    static SUCCESS: Socks5PasswordAuthResponseDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Socks5PasswordAuthResponseDecoder$State;
    static values(): Socks5PasswordAuthResponseDecoder$State[];
    private constructor()
    name(): "INIT" | "SUCCESS" | "FAILURE";
}