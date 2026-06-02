import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityTracker1_19 extends EntityTrackerBase {
    constructor(arg0: UserConnection)
    readonly affectedByBlindness: (Object | null)[];
    readonly affectedByDarkness: (Object | null)[];
    getAffectedByBlindness(): (Object | null)[];
    getAffectedByDarkness(): (Object | null)[];
    removeEntity(arg0: number): void;
}