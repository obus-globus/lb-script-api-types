import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { TransportItemsBetweenContainers$TransportItemTarget } from '../../../../../../net/minecraft/world/entity/ai/behavior/TransportItemsBetweenContainers$TransportItemTarget.d.ts'
import type { TriConsumer } from '../../../../../../org/apache/commons/lang3/function/TriConsumer.d.ts'
export interface TransportItemsBetweenContainers$OnTargetReachedInteraction extends Object, TriConsumer<PathfinderMob, TransportItemsBetweenContainers$TransportItemTarget, number> {
    andThen(arg0: (param0: PathfinderMob, param1: TransportItemsBetweenContainers$TransportItemTarget, param2: number) => void): (param0: PathfinderMob, param1: TransportItemsBetweenContainers$TransportItemTarget, param2: number) => void;
}