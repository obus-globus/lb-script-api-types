import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KeyValuePair$Builder } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair$Builder.d.ts'
export class KeyValuePair extends Object {
    static EMPTY_ARRAY: (Object | null)[];
    static newBuilder(): KeyValuePair$Builder;
    constructor(key: string, value: string)
    readonly key: string;
    readonly value: string;
    equals(obj: Object | null): boolean;
    getKey(): string;
    getValue(): string;
    hashCode(): number;
    toString(): string;
}