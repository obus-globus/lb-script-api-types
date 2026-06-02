import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class BlockFamily$Variant extends Enum<BlockFamily$Variant> {
    static BRICKS: BlockFamily$Variant;
    static BUTTON: BlockFamily$Variant;
    static CHISELED: BlockFamily$Variant;
    static COBBLED: BlockFamily$Variant;
    static CRACKED: BlockFamily$Variant;
    static CUSTOM_FENCE: BlockFamily$Variant;
    static CUSTOM_FENCE_GATE: BlockFamily$Variant;
    static CUT: BlockFamily$Variant;
    static DOOR: BlockFamily$Variant;
    static FENCE: BlockFamily$Variant;
    static FENCE_GATE: BlockFamily$Variant;
    static MOSAIC: BlockFamily$Variant;
    static POLISHED: BlockFamily$Variant;
    static PRESSURE_PLATE: BlockFamily$Variant;
    static SIGN: BlockFamily$Variant;
    static SLAB: BlockFamily$Variant;
    static STAIRS: BlockFamily$Variant;
    static TILES: BlockFamily$Variant;
    static TRAPDOOR: BlockFamily$Variant;
    static WALL: BlockFamily$Variant;
    static WALL_SIGN: BlockFamily$Variant;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlockFamily$Variant;
    static values(): (Object | null)[];
    private constructor(recipeGroup: string)
    readonly recipeGroup: string;
    getRecipeGroup(): string;
    name(): "BUTTON" | "CHISELED" | "CRACKED" | "CUT" | "DOOR" | "CUSTOM_FENCE" | "FENCE" | "CUSTOM_FENCE_GATE" | "FENCE_GATE" | "MOSAIC" | "SIGN" | "SLAB" | "STAIRS" | "PRESSURE_PLATE" | "POLISHED" | "TRAPDOOR" | "WALL" | "WALL_SIGN" | "BRICKS" | "COBBLED" | "TILES";
}