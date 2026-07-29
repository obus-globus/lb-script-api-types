import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcFrame$Companion } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Companion.d.ts'
import type { DiscordIpcFrame$Header } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Header.d.ts'
import type { DiscordIpcFrame$Opcode } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Opcode.d.ts'
export class DiscordIpcFrame extends Record {
    static Companion: DiscordIpcFrame$Companion;
    static HEADER_SIZE: number;
    static MAX_PAYLOAD_SIZE: number;
    static decode(opcode: DiscordIpcFrame$Opcode, payload: ByteBuffer): DiscordIpcFrame;
    static decodeHeader(header: ByteBuffer): DiscordIpcFrame$Header;
    constructor(opcode: DiscordIpcFrame$Opcode, payload: JsonObject)
    // private opcode: DiscordIpcFrame$Opcode;
    /*not mapped: */ opcode(): DiscordIpcFrame$Opcode;
    // private payload: JsonObject;
    /*not mapped: */ payload(): JsonObject;
    component1(): DiscordIpcFrame$Opcode;
    component2(): JsonObject;
    copy(opcode: DiscordIpcFrame$Opcode, payload: JsonObject): DiscordIpcFrame;
    encode(): ByteBuffer;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}