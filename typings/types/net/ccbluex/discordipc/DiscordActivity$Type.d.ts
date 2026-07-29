import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DiscordActivity$Type extends Enum<DiscordActivity$Type> {
    static COMPETING: DiscordActivity$Type;
    static CUSTOM: DiscordActivity$Type;
    static LISTENING: DiscordActivity$Type;
    static PLAYING: DiscordActivity$Type;
    static STREAMING: DiscordActivity$Type;
    static WATCHING: DiscordActivity$Type;
    static getEntries(): DiscordActivity$Type[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DiscordActivity$Type;
    static values(): DiscordActivity$Type[];
    private constructor(value: number)
    readonly value: number;
    name(): "PLAYING" | "STREAMING" | "LISTENING" | "WATCHING" | "CUSTOM" | "COMPETING";
}