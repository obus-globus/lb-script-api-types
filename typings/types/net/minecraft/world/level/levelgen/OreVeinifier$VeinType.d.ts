import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class OreVeinifier$VeinType extends Enum<OreVeinifier$VeinType> {
    static COPPER: OreVeinifier$VeinType;
    static IRON: OreVeinifier$VeinType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): OreVeinifier$VeinType;
    static values(): OreVeinifier$VeinType[];
    private constructor(ore: BlockState, rawOreBlock: BlockState, filler: BlockState, minY: number, maxY: number)
    // private filler: BlockState;
    // private maxY: number;
    // private minY: number;
    // private ore: BlockState;
    // private rawOreBlock: BlockState;
    name(): "COPPER" | "IRON";
}