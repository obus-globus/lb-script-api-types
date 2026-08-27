import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { TrackedEntity } from '../../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityTracker1_11 extends EntityTrackerBase {
    constructor(arg0: UserConnection)
    // private holograms: (Object | null)[];
    addHologram(arg0: number): boolean;
    isHologram(arg0: number): boolean;
    removeEntity(arg0: number): TrackedEntity;
    removeHologram(arg0: number): void;
}