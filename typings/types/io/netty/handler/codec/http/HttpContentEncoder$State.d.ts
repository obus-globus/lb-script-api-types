import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpContentEncoder$State extends Enum<HttpContentEncoder$State> {
    static AWAIT_CONTENT: HttpContentEncoder$State;
    static AWAIT_HEADERS: HttpContentEncoder$State;
    static PASS_THROUGH: HttpContentEncoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HttpContentEncoder$State;
    static values(): HttpContentEncoder$State[];
    private constructor()
    name(): "PASS_THROUGH" | "AWAIT_HEADERS" | "AWAIT_CONTENT";
}