import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PoiOrdering } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/PoiOrdering.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PoiManager } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
export class PoiOrdering$L2ThenInSquare extends Record implements PoiOrdering {
    static INSTANCE: PoiOrdering$L2ThenInSquare;
    constructor()
    checkOrderOrThrow(arg0: BlockPos, arg1: PoiManager, arg2: BlockPos[]): void;
    compare(arg0: BlockPos, arg1: PoiManager, arg2: BlockPos, arg3: BlockPos): number;
    equals(arg0: Object | null): boolean;
    getAsComparator(arg0: BlockPos, arg1: PoiManager): (param0: BlockPos, param1: BlockPos) => number;
    hashCode(): number;
    isOrdered(arg0: BlockPos, arg1: PoiManager, arg2: BlockPos[]): boolean;
    toString(): string;
}