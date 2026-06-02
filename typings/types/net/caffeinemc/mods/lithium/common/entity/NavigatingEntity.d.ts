import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
export interface NavigatingEntity extends Object{
    lithium$getRegisteredNavigation(): PathNavigation;
    lithium$isRegisteredToWorld(): boolean;
    lithium$setRegisteredToWorld(arg0: PathNavigation): void;
    lithium$updateNavigationRegistration(): void;
}