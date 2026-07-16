import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DiscordBuild extends Enum<DiscordBuild> {
    static ANY: DiscordBuild;
    static CANARY: DiscordBuild;
    static PTB: DiscordBuild;
    static STABLE: DiscordBuild;
    static from(paramarg0: number): DiscordBuild;
    static from(paramarg0: string): DiscordBuild;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DiscordBuild;
    static values(): DiscordBuild[];
    private constructor()
    private constructor(arg2: string)
    // private endpoint: string;
    name(): "CANARY" | "PTB" | "STABLE" | "ANY";
}