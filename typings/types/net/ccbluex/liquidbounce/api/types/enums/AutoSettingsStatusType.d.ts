import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../../../../net/minecraft/ChatFormatting.d.ts'
export class AutoSettingsStatusType extends Enum<AutoSettingsStatusType> {
    static BYPASSING: AutoSettingsStatusType;
    static NOT_BYPASSING: AutoSettingsStatusType;
    static UNDETECTABLE: AutoSettingsStatusType;
    static UNKNOWN: AutoSettingsStatusType;
    static getEntries(): AutoSettingsStatusType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AutoSettingsStatusType;
    static values(): AutoSettingsStatusType[];
    private constructor(displayName: string, formatting: ChatFormatting)
    readonly displayName: string;
    readonly formatting: ChatFormatting;
    name(): "NOT_BYPASSING" | "BYPASSING" | "UNDETECTABLE" | "UNKNOWN";
}