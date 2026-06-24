import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes26_2 } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes26_2.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Entity } from '../../../../../../net/raphimc/viabedrock/api/model/entity/Entity.d.ts'
import type { EntityAttribute } from '../../../../../../net/raphimc/viabedrock/protocol/model/EntityAttribute.d.ts'
import type { EntityEffect } from '../../../../../../net/raphimc/viabedrock/protocol/model/EntityEffect.d.ts'
export class LivingEntity extends Entity {
    constructor(arg0: UserConnection, arg1: number, arg2: number, arg3: string, arg4: number, arg5: UUID, arg6: EntityTypes26_2)
    // private attributes: { [key: string]: EntityAttribute };
    // private effects: { [key: string]: EntityEffect };
    attributes(): { [key: string]: EntityAttribute };
    clearEffects(): void;
    effects(): { [key: string]: EntityEffect };
    isDead(): boolean;
    removeEffect(arg0: string, arg1: PacketWrapper): void;
    sendAttribute(arg0: string): void;
    sendEffects(): void;
    setHealth(arg0: number): void;
    tick(): void;
    translateAttribute(arg0: EntityAttribute, arg1: PacketWrapper, arg2: AtomicInteger, arg3: EntityData[]): boolean;
    updateAttributes(arg0: EntityAttribute[]): void;
    updateAttributes(arg0: EntityAttribute[], arg1: PacketWrapper): void;
    updateEffect(arg0: EntityEffect, arg1: PacketWrapper): void;
}