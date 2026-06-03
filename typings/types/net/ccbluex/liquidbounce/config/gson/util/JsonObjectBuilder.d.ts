import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JsonObjectBuilder extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: JsonObject): JsonObjectBuilder;
// (invalid TS: name contains '-')     static build-impl(paramarg0: JsonObject): JsonObject;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: JsonObject): JsonObject;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: JsonObject, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: JsonObject, paramarg1: JsonObject): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: JsonObject): number;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: JsonElement): void;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: boolean): void;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: string): void;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: Number): void;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: Object): void;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: string): void;
// (invalid TS: name contains '-')     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: (param0: Object | null) => void): void;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: JsonObject): string;
    constructor(backend: JsonObject)
    // private backend: JsonObject;
    build(): JsonObject;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}