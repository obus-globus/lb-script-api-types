import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Protocolr1_7_6_10Tor1_8 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/Protocolr1_7_6_10Tor1_8.d.ts'
export class EntityDataRewriter extends Object {
    constructor(arg0: Protocolr1_7_6_10Tor1_8)
    // private protocol: Protocolr1_7_6_10Tor1_8;
    transform(arg0: UserConnection, arg1: EntityTypes1_8$EntityType, arg2: EntityData[]): void;
}