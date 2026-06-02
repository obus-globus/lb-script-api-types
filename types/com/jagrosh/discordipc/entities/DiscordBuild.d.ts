import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DiscordBuild extends Enum<DiscordBuild> {
    static ANY: DiscordBuild;
    static CANARY: DiscordBuild;
    static PTB: DiscordBuild;
    static STABLE: DiscordBuild;
    static from(paramarg0: number): DiscordBuild;
    static from(paramarg0: string): DiscordBuild;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DiscordBuild;
    static values(): (Object | null)[];
    private constructor()
    private constructor(arg2: string)
    // private endpoint: string;
    name(): "CANARY" | "PTB" | "STABLE" | "ANY";
}