import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Base64Variant$PaddingReadBehaviour extends Enum<Base64Variant$PaddingReadBehaviour> {
    static PADDING_ALLOWED: Base64Variant$PaddingReadBehaviour;
    static PADDING_FORBIDDEN: Base64Variant$PaddingReadBehaviour;
    static PADDING_REQUIRED: Base64Variant$PaddingReadBehaviour;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Base64Variant$PaddingReadBehaviour;
    static values(): (Object | null)[];
    private constructor()
    name(): "PADDING_FORBIDDEN" | "PADDING_REQUIRED" | "PADDING_ALLOWED";
}