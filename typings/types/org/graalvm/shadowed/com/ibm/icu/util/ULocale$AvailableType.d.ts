import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ULocale$AvailableType extends Enum<ULocale$AvailableType> {
    static DEFAULT: ULocale$AvailableType;
    static ONLY_LEGACY_ALIASES: ULocale$AvailableType;
    static WITH_LEGACY_ALIASES: ULocale$AvailableType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ULocale$AvailableType;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEFAULT" | "ONLY_LEGACY_ALIASES" | "WITH_LEGACY_ALIASES";
}