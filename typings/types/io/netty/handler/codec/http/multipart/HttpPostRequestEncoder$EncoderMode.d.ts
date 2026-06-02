import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class HttpPostRequestEncoder$EncoderMode extends Enum<HttpPostRequestEncoder$EncoderMode> {
    static HTML5: HttpPostRequestEncoder$EncoderMode;
    static RFC1738: HttpPostRequestEncoder$EncoderMode;
    static RFC3986: HttpPostRequestEncoder$EncoderMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpPostRequestEncoder$EncoderMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "RFC1738" | "RFC3986" | "HTML5";
}