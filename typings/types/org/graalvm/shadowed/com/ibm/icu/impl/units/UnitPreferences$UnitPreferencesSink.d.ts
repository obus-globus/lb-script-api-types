import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { UnitPreferences$UnitPreference } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/UnitPreferences$UnitPreference.d.ts'
export class UnitPreferences$UnitPreferencesSink extends UResource$Sink {
    constructor()
    readonly mapToUnitPreferences: JavaMap<string, JavaMap<string, UnitPreferences$UnitPreference[]>>;
    getMapToUnitPreferences(): JavaMap<string, JavaMap<string, UnitPreferences$UnitPreference[]>>;
    // private insertUnitPreferences(category: string, usage: string, region: string, unitPreferences: UnitPreferences$UnitPreference[]): void;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}