import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class OreVeinifier$VeinType extends Enum<OreVeinifier$VeinType> {
    static COPPER: OreVeinifier$VeinType;
    static IRON: OreVeinifier$VeinType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OreVeinifier$VeinType;
    static values(): (Object | null)[];
    private constructor(ore: BlockState, rawOreBlock: BlockState, filler: BlockState, minY: number, maxY: number)
    // private filler: BlockState;
    // private maxY: number;
    // private minY: number;
    // private ore: BlockState;
    // private rawOreBlock: BlockState;
    name(): "COPPER" | "IRON";
}