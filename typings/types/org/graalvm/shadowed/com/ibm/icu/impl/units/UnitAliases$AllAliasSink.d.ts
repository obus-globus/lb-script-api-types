import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class UnitAliases$AllAliasSink extends UResource$Sink {
    private constructor()
    // private mapAliasToReplacement: JavaMap<string, string>;
    getAliasMap(): JavaMap<string, string>;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}