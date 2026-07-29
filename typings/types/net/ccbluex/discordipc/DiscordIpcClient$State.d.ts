import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DiscordIpcClient$State extends Enum<DiscordIpcClient$State> {
    static CLOSED: DiscordIpcClient$State;
    static CONNECTED: DiscordIpcClient$State;
    static CONNECTING: DiscordIpcClient$State;
    static DISCONNECTED: DiscordIpcClient$State;
    static getEntries(): DiscordIpcClient$State[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DiscordIpcClient$State;
    static values(): DiscordIpcClient$State[];
    private constructor()
    name(): "DISCONNECTED" | "CONNECTING" | "CONNECTED" | "CLOSED";
}