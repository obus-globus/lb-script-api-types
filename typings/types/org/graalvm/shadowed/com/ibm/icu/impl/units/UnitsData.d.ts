import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConversionRates } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates.d.ts'
import type { MeasureUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl.d.ts'
import type { UnitPreferences } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitPreferences.d.ts'
import type { UnitPreferences$UnitPreference } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitPreferences$UnitPreference.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class UnitsData extends Object {
    static getCategoryIndexOfSimpleUnit(paramsimpleUnitIndex: number): number;
    static getSimpleUnits(): string[];
    constructor()
    readonly conversionRates: ConversionRates;
    readonly unitPreferences: UnitPreferences;
    getCategory(measureUnit: MeasureUnitImpl): string;
    getConversionRates(): ConversionRates;
    getPreferencesFor(category: string, usage: string, locale: ULocale): UnitPreferences$UnitPreference[];
    getUnitPreferences(): UnitPreferences;
}