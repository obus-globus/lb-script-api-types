import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AutoSettingsType extends Enum<AutoSettingsType> {
    static LEGIT: AutoSettingsType;
    static RAGE: AutoSettingsType;
    static getEntries(): AutoSettingsType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AutoSettingsType;
    static values(): (Object | null)[];
    private constructor(displayName: string)
    readonly displayName: string;
    name(): "RAGE" | "LEGIT";
}