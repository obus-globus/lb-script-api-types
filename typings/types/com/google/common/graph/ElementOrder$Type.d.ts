import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ElementOrder$Type extends Enum<ElementOrder$Type> {
    static INSERTION: ElementOrder$Type;
    static SORTED: ElementOrder$Type;
    static STABLE: ElementOrder$Type;
    static UNORDERED: ElementOrder$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ElementOrder$Type;
    static values(): ElementOrder$Type[];
    private constructor()
    name(): "UNORDERED" | "STABLE" | "INSERTION" | "SORTED";
}