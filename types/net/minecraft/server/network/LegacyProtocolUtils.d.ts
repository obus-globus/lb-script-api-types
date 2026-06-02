import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LegacyProtocolUtils extends Object {
    static CUSTOM_PAYLOAD_PACKET_ID: number;
    static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
    static DISCONNECT_PACKET_ID: number;
    static FAKE_PROTOCOL_VERSION: number;
    static GET_INFO_PACKET_ID: number;
    static GET_INFO_PACKET_VERSION_1: number;
    static readLegacyString(parammsg: ByteBuf): string;
    static writeLegacyString(paramtoSend: ByteBuf, paramstr: string): void;
    constructor()
}