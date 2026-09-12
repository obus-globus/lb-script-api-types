import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JsonArrayBuilder extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: JsonElement[]): JsonArrayBuilder;
// (invalid TS: name contains '-')     static build-impl(): JsonElement[];
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: JsonElement[]): JsonElement[];
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: number): JsonElement[];
// (invalid TS: name contains '-')     static equals-impl(other: Object | null): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: JsonElement[], paramarg1: JsonElement[]): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(): number;
// (invalid TS: name contains '-')     static toString-impl(): string;
// (invalid TS: name contains '-')     static unaryPlus-impl(self: JsonElement | null): void;
// (invalid TS: name contains '-')     static unaryPlus-impl(self: boolean | null): void;
// (invalid TS: name contains '-')     static unaryPlus-impl(self: string | null): void;
// (invalid TS: name contains '-')     static unaryPlus-impl(self: Number | null): void;
    constructor(backend: JsonElement[])
    constructor(initialCapacity: number)
    // private backend: JsonElement[];
    build(): JsonElement[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}