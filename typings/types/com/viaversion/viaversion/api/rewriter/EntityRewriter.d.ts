import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTracker } from '../../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Rewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/Rewriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EntityRewriter<T extends Protocol<any, any, any, any>> extends Rewriter<T>, Object{
    handleEntityData(arg0: number, arg1: EntityData[], arg2: UserConnection): void;
    mappedEntityIdentifier(arg0: string): string;
    newEntityId(arg0: number): number;
    objectTypeFromId(arg0: number, arg1: number): EntityType;
    tracker<E extends EntityTracker>(arg0: UserConnection): E;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
}