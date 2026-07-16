import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class HttpClient$Version extends Enum<HttpClient$Version> {
    static HTTP_1_1: HttpClient$Version;
    static HTTP_2: HttpClient$Version;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpClient$Version;
    static values(): HttpClient$Version[];
    private constructor()
    name(): "HTTP_1_1" | "HTTP_2";
}