import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClipBlockStateContext extends Object {
    constructor(from: Vec3, to: Vec3, block: (param0: BlockState) => kotlin.Boolean)
    // private block: (param0: BlockState) => kotlin.Boolean;
    readonly from: Vec3;
    readonly to: Vec3;
    getFrom(): Vec3;
    getTo(): Vec3;
    isTargetBlock(): (param0: BlockState) => kotlin.Boolean;
}