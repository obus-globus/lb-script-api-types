import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrajectoryDescriptor } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryDescriptor.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityTrajectoryResolver extends Object {
    static INSTANCE: EntityTrajectoryResolver;
    static resolveEntityTrajectory(paramarg0: Entity, paramarg1: boolean, paramarg2: boolean): TrajectoryDescriptor;
    resolveEntityTrajectory(entity: Entity, activeArrows: boolean, activeOthers: boolean): TrajectoryDescriptor | null;
}