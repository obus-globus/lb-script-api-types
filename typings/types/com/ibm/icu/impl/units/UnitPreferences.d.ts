import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UnitPreferences$UnitPreference } from '../../../../../com/ibm/icu/impl/units/UnitPreferences$UnitPreference.d.ts'
import type { UnitsData } from '../../../../../com/ibm/icu/impl/units/UnitsData.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitPreferences extends Object {
    static formMapKey(paramarg0: string, paramarg1: string): string;
    constructor()
    // private mapToUnitPreferences: JavaMap<string, JavaMap<string, UnitPreferences$UnitPreference[]>>;
    getPreferencesFor(arg0: string, arg1: string, arg2: ULocale, arg3: UnitsData): UnitPreferences$UnitPreference[];
    // private getUnitPreferences(arg0: string, arg1: string, arg2: string): UnitPreferences$UnitPreference[];
}