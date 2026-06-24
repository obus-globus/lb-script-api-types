import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PoiType extends Record {
    static NONE: (param0: Holder<PoiType>) => boolean;
    constructor(matchingStates: BlockState[], maxTickets: number, validRange: number)
    // private matchingStates: BlockState[];
    // private maxTickets: number;
    // private validRange: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    is(state: BlockState): boolean;
    matchingStates(): BlockState[];
    maxTickets(): number;
    toString(): string;
    validRange(): number;
}