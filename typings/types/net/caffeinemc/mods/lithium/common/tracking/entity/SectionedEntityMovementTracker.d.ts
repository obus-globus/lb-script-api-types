import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityMovementTrackerSection } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/EntityMovementTrackerSection.d.ts'
import type { SectionedEntityMovementListener } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/SectionedEntityMovementListener.d.ts'
import type { WorldSectionBox } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/tuples/WorldSectionBox.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { EntityAccess } from '../../../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntitySection } from '../../../../../../../net/minecraft/world/level/entity/EntitySection.d.ts'
export abstract class SectionedEntityMovementTracker<E extends EntityAccess> extends Object {
    constructor(arg0: WorldSectionBox, arg1: Object)
    // private clazz: Object;
    // private maxChangeTime: number;
    // private sectionVisible: boolean[];
    // private sectionedEntityMovementListeners: SectionedEntityMovementListener[];
    // private sectionsNotListeningTo: EntityMovementTrackerSection[];
    // private sortedSections: EntitySection<E>[];
    // private timesRegistered: number;
    // private trackedIndex: number;
    // private trackedWorldSections: WorldSectionBox;
    emitEntityMovement(arg0: number, arg1: EntityMovementTrackerSection): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isUnchangedSince(arg0: number): boolean;
    // private listenToAllSectionsAndGetMaxChangeTime(): number;
    listenToEntityMovementOnce(arg0: SectionedEntityMovementListener): void;
    // private notifyAllListeners(): void;
    onSectionEnteredRange(arg0: EntityMovementTrackerSection): void;
    onSectionLeftRange(arg0: EntityMovementTrackerSection): void;
    register(arg0: ServerLevel): void;
    // private setChanged(arg0: number): void;
    unRegister(arg0: ServerLevel): void;
}