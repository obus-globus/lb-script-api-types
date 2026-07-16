import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AutoSettingsType extends Enum<AutoSettingsType> {
    static LEGIT: AutoSettingsType;
    static RAGE: AutoSettingsType;
    static getEntries(): AutoSettingsType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AutoSettingsType;
    static values(): AutoSettingsType[];
    private constructor(displayName: string)
    readonly displayName: string;
    name(): "RAGE" | "LEGIT";
}