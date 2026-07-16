import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { StrSubstitutor } from '../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export class Property extends Object {
    static EMPTY_ARRAY: Property[];
    static createProperty(paramname: string, paramvalue: string): Property;
    static createProperty(paramname: string, paramrawValue: string, paramvalue: string): Property;
    static createProperty(paramname: string, paramrawValue: string, paramconfiguration: Configuration): Property;
    private constructor(name: string, rawValue: string, value: string)
    readonly name: string;
    readonly rawValue: string;
    readonly value: string;
    readonly valueNeedsLookup: boolean;
    evaluate(substitutor: StrSubstitutor): string;
    getName(): string;
    getRawValue(): string;
    getValue(): string;
    isValueNeedsLookup(): boolean;
    toString(): string;
}