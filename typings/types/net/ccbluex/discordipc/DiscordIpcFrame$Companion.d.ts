import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcFrame } from '../../../net/ccbluex/discordipc/DiscordIpcFrame.d.ts'
import type { DiscordIpcFrame$Header } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Header.d.ts'
import type { DiscordIpcFrame$Opcode } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Opcode.d.ts'
export class DiscordIpcFrame$Companion extends Object {
    HEADER_SIZE: number;
    MAX_PAYLOAD_SIZE: number;
    decode(opcode: DiscordIpcFrame$Opcode, payload: ByteBuffer): DiscordIpcFrame;
    decodeHeader(header: ByteBuffer): DiscordIpcFrame$Header;
}