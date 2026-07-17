import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class GlobalSettingsRichPresence$RichPresencePart extends Enum<GlobalSettingsRichPresence$RichPresencePart> implements Tagged {
    static CLIENT_AUTHOR: GlobalSettingsRichPresence$RichPresencePart;
    static CLIENT_BRANCH: GlobalSettingsRichPresence$RichPresencePart;
    static CLIENT_COMMIT: GlobalSettingsRichPresence$RichPresencePart;
    static CLIENT_NAME: GlobalSettingsRichPresence$RichPresencePart;
    static CLIENT_VERSION: GlobalSettingsRichPresence$RichPresencePart;
    static Companion: Tagged$Companion;
    static MINECRAFT_VERSION: GlobalSettingsRichPresence$RichPresencePart;
    static MODULES_SUMMARY: GlobalSettingsRichPresence$RichPresencePart;
    static PROTOCOL_VERSION: GlobalSettingsRichPresence$RichPresencePart;
    static SERVER: GlobalSettingsRichPresence$RichPresencePart;
    static getEntries(): GlobalSettingsRichPresence$RichPresencePart[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): GlobalSettingsRichPresence$RichPresencePart;
    static values(): GlobalSettingsRichPresence$RichPresencePart[];
    private constructor(tag: string)
    readonly tag: string;
    getText(): string | null;
    name(): "CLIENT_NAME" | "CLIENT_VERSION" | "CLIENT_AUTHOR" | "CLIENT_BRANCH" | "CLIENT_COMMIT" | "MODULES_SUMMARY" | "MINECRAFT_VERSION" | "PROTOCOL_VERSION" | "SERVER";
}