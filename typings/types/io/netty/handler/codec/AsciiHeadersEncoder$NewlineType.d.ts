import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AsciiHeadersEncoder$NewlineType extends Enum<AsciiHeadersEncoder$NewlineType> {
    static CRLF: AsciiHeadersEncoder$NewlineType;
    static LF: AsciiHeadersEncoder$NewlineType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AsciiHeadersEncoder$NewlineType;
    static values(): AsciiHeadersEncoder$NewlineType[];
    private constructor()
    name(): "LF" | "CRLF";
}