import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MicrosoftAccount$AuthMethod extends Enum<MicrosoftAccount$AuthMethod> {
    static AZURE_APP: MicrosoftAccount$AuthMethod;
    static LIQUIDBOUNCE: MicrosoftAccount$AuthMethod;
    static MINECRAFT_NINTENDO_SWITCH: MicrosoftAccount$AuthMethod;
    static MINECRAFT_PC: MicrosoftAccount$AuthMethod;
    static getEntries(): MicrosoftAccount$AuthMethod[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MicrosoftAccount$AuthMethod;
    static values(): (Object | null)[];
    private constructor(clientId: string, redirectUri: string, scope: string, rpsTicketRule: string)
    readonly clientId: string;
    readonly redirectUri: string;
    readonly rpsTicketRule: string;
    readonly scope: string;
    name(): "MINECRAFT_PC" | "MINECRAFT_NINTENDO_SWITCH" | "LIQUIDBOUNCE" | "AZURE_APP";
}