import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProtocolInfo } from '../../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
export class VanillaPacketTypes extends Record {
    static CONFIGURATION_C2S: VanillaPacketTypes;
    static CONFIGURATION_S2C: VanillaPacketTypes;
    static PLAY_C2S: VanillaPacketTypes;
    static PLAY_S2C: VanillaPacketTypes;
    static get(paramarg0: ProtocolInfo<any>): VanillaPacketTypes;
    // private types: PacketType<any>[];
    equals(arg0: Object | null): boolean;
    get(arg0: number): PacketType<any>;
    hashCode(): number;
    toString(): string;
    types(): PacketType<any>[];
}