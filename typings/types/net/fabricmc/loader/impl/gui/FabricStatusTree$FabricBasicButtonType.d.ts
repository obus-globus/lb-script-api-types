import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FabricStatusTree$FabricBasicButtonType extends Enum<FabricStatusTree$FabricBasicButtonType> {
    static CLICK_MANY: FabricStatusTree$FabricBasicButtonType;
    static CLICK_ONCE: FabricStatusTree$FabricBasicButtonType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FabricStatusTree$FabricBasicButtonType;
    static values(): FabricStatusTree$FabricBasicButtonType[];
    private constructor()
    name(): "CLICK_ONCE" | "CLICK_MANY";
}