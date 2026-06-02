import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ConversionRates$ConversionRateInfo extends Object {
    constructor(simpleUnit: string, target: string, conversionRate: string, offset: string, special: string, systems: string)
    readonly conversionRate: string;
    readonly offset: BigDecimal;
    // private simpleUnit: string;
    readonly specialMappingName: string;
    readonly systems: string;
    readonly target: string;
    getConversionRate(): string;
    getOffset(): BigDecimal;
    getSpecialMappingName(): string;
    getSystems(): string;
    getTarget(): string;
}