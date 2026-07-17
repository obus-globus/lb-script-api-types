import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { UResource$Key } from '../../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { ConversionRates$ConversionRateInfo } from '../../../../../com/ibm/icu/impl/units/ConversionRates$ConversionRateInfo.d.ts'
export class ConversionRates$ConversionRatesSink extends UResource$Sink {
    constructor()
    readonly mapToConversionRate: JavaMap<string, ConversionRates$ConversionRateInfo>;
    getMapToConversionRate(): JavaMap<string, ConversionRates$ConversionRateInfo>;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}