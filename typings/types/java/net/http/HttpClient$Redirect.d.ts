import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class HttpClient$Redirect extends Enum<HttpClient$Redirect> {
    static ALWAYS: HttpClient$Redirect;
    static NEVER: HttpClient$Redirect;
    static NORMAL: HttpClient$Redirect;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HttpClient$Redirect;
    static values(): HttpClient$Redirect[];
    private constructor()
    name(): "NEVER" | "ALWAYS" | "NORMAL";
}