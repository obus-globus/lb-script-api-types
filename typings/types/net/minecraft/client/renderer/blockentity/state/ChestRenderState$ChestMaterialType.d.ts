import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ChestRenderState$ChestMaterialType extends Enum<ChestRenderState$ChestMaterialType> {
    static CHRISTMAS: ChestRenderState$ChestMaterialType;
    static COPPER_EXPOSED: ChestRenderState$ChestMaterialType;
    static COPPER_OXIDIZED: ChestRenderState$ChestMaterialType;
    static COPPER_UNAFFECTED: ChestRenderState$ChestMaterialType;
    static COPPER_WEATHERED: ChestRenderState$ChestMaterialType;
    static ENDER_CHEST: ChestRenderState$ChestMaterialType;
    static REGULAR: ChestRenderState$ChestMaterialType;
    static TRAPPED: ChestRenderState$ChestMaterialType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChestRenderState$ChestMaterialType;
    static values(): ChestRenderState$ChestMaterialType[];
    private constructor()
    name(): "ENDER_CHEST" | "CHRISTMAS" | "TRAPPED" | "COPPER_UNAFFECTED" | "COPPER_EXPOSED" | "COPPER_WEATHERED" | "COPPER_OXIDIZED" | "REGULAR";
}