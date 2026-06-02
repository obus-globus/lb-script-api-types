import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FabricStatusTree$FabricBasicButtonType extends Enum<FabricStatusTree$FabricBasicButtonType> {
    static CLICK_MANY: FabricStatusTree$FabricBasicButtonType;
    static CLICK_ONCE: FabricStatusTree$FabricBasicButtonType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FabricStatusTree$FabricBasicButtonType;
    static values(): (Object | null)[];
    private constructor()
    name(): "CLICK_ONCE" | "CLICK_MANY";
}