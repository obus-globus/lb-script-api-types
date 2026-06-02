import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class StructuredDataId extends Object implements Serializable, StringBuilderFormattable {
    static META: StructuredDataId;
    static ORIGIN: StructuredDataId;
    static RESERVED: string;
    static TIME_QUALITY: StructuredDataId;
    constructor(name: string)
    constructor(name: string, required: string[], optional: string[])
    constructor(name: string, required: string[], optional: string[], maxLength: number)
    constructor(name: string, maxLength: number)
    constructor(name: string, enterpriseNumber: number, required: string[], optional: string[])
    constructor(name: string, enterpriseNumber: number, required: string[], optional: string[], maxLength: number)
    constructor(name: string, enterpriseNumber: string, required: string[], optional: string[])
    constructor(name: string, enterpriseNumber: string, required: string[], optional: string[], maxLength: number)
    readonly enterpriseNumber: string;
    readonly name: string;
    readonly optional: string[];
    readonly required: string[];
    formatTo(buffer: StringBuilder): void;
    getEnterpriseNumber(): string;
    getName(): string;
    getOptional(): string[];
    getRequired(): string[];
    isReserved(): boolean;
    makeId(defaultId: string, anEnterpriseNumber: number): StructuredDataId;
    makeId(defaultId: string, anEnterpriseNumber: string): StructuredDataId;
    makeId(id: StructuredDataId): StructuredDataId;
    toString(): string;
}