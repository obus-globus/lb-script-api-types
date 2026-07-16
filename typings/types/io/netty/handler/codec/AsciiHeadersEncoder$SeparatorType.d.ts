import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AsciiHeadersEncoder$SeparatorType extends Enum<AsciiHeadersEncoder$SeparatorType> {
    static COLON: AsciiHeadersEncoder$SeparatorType;
    static COLON_SPACE: AsciiHeadersEncoder$SeparatorType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AsciiHeadersEncoder$SeparatorType;
    static values(): AsciiHeadersEncoder$SeparatorType[];
    private constructor()
    name(): "COLON" | "COLON_SPACE";
}