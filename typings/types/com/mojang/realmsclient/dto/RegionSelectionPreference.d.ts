import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RegionSelectionPreference extends Enum<RegionSelectionPreference> {
    static AUTOMATIC_OWNER: RegionSelectionPreference;
    static AUTOMATIC_PLAYER: RegionSelectionPreference;
    static DEFAULT_SELECTION: RegionSelectionPreference;
    static MANUAL: RegionSelectionPreference;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RegionSelectionPreference;
    static values(): RegionSelectionPreference[];
    private constructor(id: number, translationKey: string)
    id: number;
    translationKey: string;
    name(): "AUTOMATIC_PLAYER" | "AUTOMATIC_OWNER" | "MANUAL";
}