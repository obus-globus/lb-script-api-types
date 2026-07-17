import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { UnitPreferences$UnitPreference } from '../../../../../com/ibm/icu/impl/units/UnitPreferences$UnitPreference.d.ts'
export class UnitPreferences$UnitPreferencesSink extends UResource$Sink {
    constructor()
    readonly mapToUnitPreferences: JavaMap<string, JavaMap<string, UnitPreferences$UnitPreference[]>>;
    getMapToUnitPreferences(): JavaMap<string, JavaMap<string, UnitPreferences$UnitPreference[]>>;
    // private insertUnitPreferences(arg0: string, arg1: string, arg2: string, arg3: UnitPreferences$UnitPreference[]): void;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}