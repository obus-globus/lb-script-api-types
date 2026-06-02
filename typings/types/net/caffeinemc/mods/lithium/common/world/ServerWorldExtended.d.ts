import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
export interface ServerWorldExtended extends Object{
    lithium$setNavigationActive(arg0: Mob): void;
    lithium$setNavigationInactive(arg0: Mob): void;
}