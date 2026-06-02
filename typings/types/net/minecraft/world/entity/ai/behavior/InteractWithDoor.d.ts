import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { Node } from '../../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
export class InteractWithDoor extends Object {
    static closeDoorsThatIHaveOpenedOrPassedThrough(paramlevel: ServerLevel, parambody: LivingEntity, parammovingFromNode: Node, parammovingToNode: Node, paramdoors: GlobalPos[], paramnearestEntities: Optional<Object>): void;
    static create(): BehaviorControl<LivingEntity>;
    constructor()
}