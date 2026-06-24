import type { ConversionRates } from '../../../../../com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitAliases$Alias } from '../../../../../com/ibm/icu/impl/units/UnitAliases$Alias.d.ts'
import type { UnitPreferences } from '../../../../../com/ibm/icu/impl/units/UnitPreferences.d.ts'
import type { UnitPreferences$UnitPreference } from '../../../../../com/ibm/icu/impl/units/UnitPreferences$UnitPreference.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitsData extends Object {
    static getAliases(): UnitAliases$Alias[];
    static getCategoryIndexOfSimpleUnit(paramarg0: number): number;
    static getReplacementFromAliasIndex(paramarg0: number): string;
    static getSimpleUnits(): (Object | null)[];
    constructor()
    readonly conversionRates: ConversionRates;
    readonly unitPreferences: UnitPreferences;
    getCategory(arg0: MeasureUnitImpl): string;
    getConversionRates(): ConversionRates;
    getPreferencesFor(arg0: string, arg1: string, arg2: ULocale): UnitPreferences$UnitPreference[];
    getUnitPreferences(): UnitPreferences;
}