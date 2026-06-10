import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SectionedEntityMovementTracker } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/SectionedEntityMovementTracker.d.ts'
import type { EntityAccess } from '../../../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntitySectionStorage } from '../../../../../../../net/minecraft/world/level/entity/EntitySectionStorage.d.ts'
export interface EntityMovementTrackerSection extends Object{
    lithium$addListener(arg0: SectionedEntityMovementTracker<Object>): void;
    lithium$getChangeTime(arg0: number): number;
    lithium$listenToMovementOnce<E extends EntityAccess>(arg0: SectionedEntityMovementTracker<E>, arg1: number): void;
    lithium$removeListenToMovementOnce<E extends EntityAccess>(arg0: SectionedEntityMovementTracker<E>, arg1: number): void;
    lithium$removeListener(arg0: EntitySectionStorage<Object>, arg1: SectionedEntityMovementTracker<Object>): void;
    lithium$trackEntityMovement(arg0: number, arg1: number): void;
}