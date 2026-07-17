import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { ConversionRates$ConversionRateInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/ConversionRates$ConversionRateInfo.d.ts'
export class ConversionRates$ConversionRatesSink extends UResource$Sink {
    constructor()
    readonly mapToConversionRate: JavaMap<string, ConversionRates$ConversionRateInfo>;
    getMapToConversionRate(): JavaMap<string, ConversionRates$ConversionRateInfo>;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}