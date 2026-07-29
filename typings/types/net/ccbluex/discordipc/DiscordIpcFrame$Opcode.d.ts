import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { DiscordIpcFrame$Opcode$Companion } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Opcode$Companion.d.ts'
export class DiscordIpcFrame$Opcode extends Enum<DiscordIpcFrame$Opcode> {
    static CLOSE: DiscordIpcFrame$Opcode;
    static Companion: DiscordIpcFrame$Opcode$Companion;
    static FRAME: DiscordIpcFrame$Opcode;
    static HANDSHAKE: DiscordIpcFrame$Opcode;
    static PING: DiscordIpcFrame$Opcode;
    static PONG: DiscordIpcFrame$Opcode;
    static fromValue(value: number): DiscordIpcFrame$Opcode;
    static getEntries(): DiscordIpcFrame$Opcode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DiscordIpcFrame$Opcode;
    static values(): DiscordIpcFrame$Opcode[];
    private constructor(value: number)
    readonly value: number;
    name(): "HANDSHAKE" | "FRAME" | "CLOSE" | "PING" | "PONG";
}