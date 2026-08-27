import type { EntityRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriter.d.ts'
import type { Protocol1_19_4To1_19_3 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_4to1_19_3/Protocol1_19_4To1_19_3.d.ts'
import type { EntityTracker1_19_4 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_4to1_19_3/storage/EntityTracker1_19_4.d.ts'
import type { LinkedEntityStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_19_4to1_19_3/storage/LinkedEntityStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_19_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_19_3to1_19_4/packet/ClientboundPackets1_19_4.d.ts'
export class EntityPacketRewriter1_19_4 extends EntityRewriter<ClientboundPackets1_19_4, Protocol1_19_4To1_19_3> {
    constructor(arg0: Protocol1_19_4To1_19_3)
    // private clearTextDisplayLines(arg0: UserConnection, arg1: EntityTracker1_19_4, arg2: number): void;
    // private isMultiLineTextDisplay(arg0: EntityTracker1_19_4, arg1: number): boolean;
    // private moveTextDisplayLines(arg0: UserConnection, arg1: LinkedEntityStorage, arg2: number, arg3: number, arg4: number): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    registerRewrites(): void;
    // private riddenTextDisplayStorage(arg0: EntityTracker1_19_4, arg1: number, arg2: number): LinkedEntityStorage;
    // private sendLineData(arg0: UserConnection, arg1: number, arg2: JsonElement): void;
    // private sendRelativeMove(arg0: UserConnection, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private sendTeleport(arg0: UserConnection, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private sendVehiclePassengers(arg0: UserConnection, arg1: EntityTracker1_19_4, arg2: number): void;
    // private teleportTextDisplayLines(arg0: UserConnection, arg1: LinkedEntityStorage): void;
    typeFromId(arg0: number): EntityType;
    typeFromId(arg0: string): EntityType;
    // private withoutMultiLineTextDisplays(arg0: EntityTracker1_19_4, arg1: number[]): number[];
}