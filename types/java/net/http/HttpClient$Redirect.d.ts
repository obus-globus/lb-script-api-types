import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class HttpClient$Redirect extends Enum<HttpClient$Redirect> {
    static ALWAYS: HttpClient$Redirect;
    static NEVER: HttpClient$Redirect;
    static NORMAL: HttpClient$Redirect;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpClient$Redirect;
    static values(): (Object | null)[];
    private constructor()
    name(): "NEVER" | "ALWAYS" | "NORMAL";
}