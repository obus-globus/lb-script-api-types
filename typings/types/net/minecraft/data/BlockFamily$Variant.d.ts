import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class BlockFamily$Variant extends Enum<BlockFamily$Variant> {
    static BRICKS: BlockFamily$Variant;
    static BUTTON: BlockFamily$Variant;
    static CHISELED: BlockFamily$Variant;
    static COBBLED: BlockFamily$Variant;
    static CRACKED: BlockFamily$Variant;
    static CUSTOM_FENCE: BlockFamily$Variant;
    static CUSTOM_FENCE_GATE: BlockFamily$Variant;
    static CUSTOM_HANGING_SIGN: BlockFamily$Variant;
    static CUSTOM_WALL_HANGING_SIGN: BlockFamily$Variant;
    static CUT: BlockFamily$Variant;
    static DOOR: BlockFamily$Variant;
    static FENCE: BlockFamily$Variant;
    static FENCE_GATE: BlockFamily$Variant;
    static HANGING_SIGN: BlockFamily$Variant;
    static LOG: BlockFamily$Variant;
    static MOSAIC: BlockFamily$Variant;
    static PILLAR: BlockFamily$Variant;
    static POLISHED: BlockFamily$Variant;
    static PRESSURE_PLATE: BlockFamily$Variant;
    static SIGN: BlockFamily$Variant;
    static SLAB: BlockFamily$Variant;
    static STAIRS: BlockFamily$Variant;
    static STRIPPED_LOG: BlockFamily$Variant;
    static TILES: BlockFamily$Variant;
    static TRAPDOOR: BlockFamily$Variant;
    static WALL: BlockFamily$Variant;
    static WALL_HANGING_SIGN: BlockFamily$Variant;
    static WALL_SIGN: BlockFamily$Variant;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlockFamily$Variant;
    static values(): BlockFamily$Variant[];
    private constructor(recipeGroup: string)
    readonly recipeGroup: string;
    getBaseVariantForCrafting(): BlockFamily$Variant;
    getPrefixedRecipeGroup(prefix: string): string;
    getRecipeGroup(): string;
    name(): "BUTTON" | "CHISELED" | "CRACKED" | "CUT" | "DOOR" | "CUSTOM_FENCE" | "FENCE" | "CUSTOM_FENCE_GATE" | "FENCE_GATE" | "CUSTOM_HANGING_SIGN" | "HANGING_SIGN" | "LOG" | "STRIPPED_LOG" | "MOSAIC" | "SIGN" | "SLAB" | "STAIRS" | "PRESSURE_PLATE" | "POLISHED" | "TRAPDOOR" | "WALL" | "WALL_SIGN" | "CUSTOM_WALL_HANGING_SIGN" | "WALL_HANGING_SIGN" | "BRICKS" | "COBBLED" | "TILES" | "PILLAR";
}