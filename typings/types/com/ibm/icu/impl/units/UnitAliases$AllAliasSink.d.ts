import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../com/ibm/icu/impl/UResource$Value.d.ts'
export class UnitAliases$AllAliasSink extends UResource$Sink {
    private constructor()
    // private mapAliasToReplacement: JavaMap<string, string>;
    getAliasMap(): JavaMap<string, string>;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}