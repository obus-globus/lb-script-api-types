import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { UnitPreferences$UnitPreference } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitPreferences$UnitPreference.d.ts'
import type { UnitsData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitsData.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UnitPreferences extends Object {
    static formMapKey(paramcategory: string, paramusage: string): string;
    constructor()
    // private mapToUnitPreferences: { [key: string]: { [key: string]: UnitPreferences$UnitPreference[] } };
    getPreferencesFor(category: string, usage: string, locale: ULocale, data: UnitsData): UnitPreferences$UnitPreference[];
    // private getUnitPreferences(category: string, usage: string, region: string): UnitPreferences$UnitPreference[];
}