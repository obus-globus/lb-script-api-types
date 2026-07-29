import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DiscordActivity$StatusDisplayType extends Enum<DiscordActivity$StatusDisplayType> {
    static DETAILS: DiscordActivity$StatusDisplayType;
    static NAME: DiscordActivity$StatusDisplayType;
    static STATE: DiscordActivity$StatusDisplayType;
    static getEntries(): DiscordActivity$StatusDisplayType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DiscordActivity$StatusDisplayType;
    static values(): DiscordActivity$StatusDisplayType[];
    private constructor(value: number)
    readonly value: number;
    name(): "NAME" | "STATE" | "DETAILS";
}