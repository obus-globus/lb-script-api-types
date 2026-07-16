import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MicrosoftAccount$AuthMethod extends Enum<MicrosoftAccount$AuthMethod> {
    static AZURE_APP: MicrosoftAccount$AuthMethod;
    static LIQUIDBOUNCE: MicrosoftAccount$AuthMethod;
    static MINECRAFT_NINTENDO_SWITCH: MicrosoftAccount$AuthMethod;
    static MINECRAFT_PC: MicrosoftAccount$AuthMethod;
    static getEntries(): MicrosoftAccount$AuthMethod[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MicrosoftAccount$AuthMethod;
    static values(): MicrosoftAccount$AuthMethod[];
    private constructor(clientId: string, redirectUri: string, scope: string, rpsTicketRule: string)
    readonly clientId: string;
    readonly redirectUri: string;
    readonly rpsTicketRule: string;
    readonly scope: string;
    name(): "MINECRAFT_PC" | "MINECRAFT_NINTENDO_SWITCH" | "LIQUIDBOUNCE" | "AZURE_APP";
}