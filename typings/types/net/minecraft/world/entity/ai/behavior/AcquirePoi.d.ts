import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { PoiType } from '../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class AcquirePoi extends Object {
    static SCAN_RANGE: number;
    static create(parampoiType: (param0: Holder<PoiType>) => boolean, parammemoryToAcquire: MemoryModuleType<GlobalPos>, paramonlyIfAdult: boolean, paramonPoiAcquisitionEvent: Optional<number>): BehaviorControl<PathfinderMob>;
    static create(parampoiType: (param0: Holder<PoiType>) => boolean, parammemoryToAcquire: MemoryModuleType<GlobalPos>, paramonlyIfAdult: boolean, paramonPoiAcquisitionEvent: Optional<number>, paramvalidPoi: (param0: ServerLevel, param1: BlockPos) => boolean): BehaviorControl<PathfinderMob>;
    static create(parampoiType: (param0: Holder<PoiType>) => boolean, parammemoryToValidate: MemoryModuleType<GlobalPos>, parammemoryToAcquire: MemoryModuleType<GlobalPos>, paramonlyIfAdult: boolean, paramonPoiAcquisitionEvent: Optional<number>, paramvalidPoi: (param0: ServerLevel, param1: BlockPos) => boolean): BehaviorControl<PathfinderMob>;
    static findPathToPois(parambody: Mob, parampois: Pair<Holder<PoiType>, BlockPos>[]): Path;
    constructor()
}