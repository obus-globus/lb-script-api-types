import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { TrackedEntity } from '../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataHandlerEvent } from '../../../../../com/viaversion/viaversion/rewriter/entitydata/EntityDataHandlerEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EntityDataHandlerEventImpl extends Object implements EntityDataHandlerEvent {
    constructor(arg0: UserConnection, arg1: TrackedEntity, arg2: number, arg3: EntityData, arg4: EntityData[])
    // private cancel: boolean;
    // private connection: UserConnection;
    // private data: EntityData;
    // private dataList: EntityData[];
    // private entityId: number;
    // private extraData: EntityData[];
    // private trackedEntity: TrackedEntity;
    cancel(): void;
    cancelled(): boolean;
    createExtraData(arg0: EntityData): void;
    data(): EntityData;
    dataAtIndex(arg0: number): EntityData;
    dataList(): EntityData[];
    entityId(): number;
    entityType(): EntityType;
    extraData(): EntityData[];
    hasExtraData(): boolean;
    index(): number;
    setIndex(arg0: number): void;
    trackedEntity(): TrackedEntity;
    user(): UserConnection;
}