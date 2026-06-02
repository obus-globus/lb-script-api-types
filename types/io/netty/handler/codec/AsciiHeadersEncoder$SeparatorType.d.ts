import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AsciiHeadersEncoder$SeparatorType extends Enum<AsciiHeadersEncoder$SeparatorType> {
    static COLON: AsciiHeadersEncoder$SeparatorType;
    static COLON_SPACE: AsciiHeadersEncoder$SeparatorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AsciiHeadersEncoder$SeparatorType;
    static values(): (Object | null)[];
    private constructor()
    name(): "COLON" | "COLON_SPACE";
}