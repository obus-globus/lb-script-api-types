import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityPacketRewriter1_19_3$PlayerProfileUpdate extends Record {
    private constructor(uuid: UUID, gamemode: number, latency: number, displayName: JsonElement)
    // private displayName: JsonElement;
    // private gamemode: number;
    // private latency: number;
    // private uuid: UUID;
    displayName(): JsonElement;
    equals(arg0: Object | null): boolean;
    gamemode(): number;
    hashCode(): number;
    latency(): number;
    toString(): string;
    uuid(): UUID;
}