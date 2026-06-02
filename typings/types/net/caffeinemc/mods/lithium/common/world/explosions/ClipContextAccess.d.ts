import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
export interface ClipContextAccess extends Object{
    lithium$getCollisionContext(): CollisionContext;
    lithium$setFrom(arg0: Vec3): void;
}