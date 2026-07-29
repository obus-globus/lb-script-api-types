import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcFrame$Opcode } from '../../../net/ccbluex/discordipc/DiscordIpcFrame$Opcode.d.ts'
export class DiscordIpcFrame$Header extends Record {
    constructor(opcode: DiscordIpcFrame$Opcode, payloadSize: number)
    // private opcode: DiscordIpcFrame$Opcode;
    /*not mapped: */ opcode(): DiscordIpcFrame$Opcode;
    // private payloadSize: number;
    /*not mapped: */ payloadSize(): number;
    component1(): DiscordIpcFrame$Opcode;
    component2(): number;
    copy(opcode: DiscordIpcFrame$Opcode, payloadSize: number): DiscordIpcFrame$Header;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}