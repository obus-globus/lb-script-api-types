import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JsonObjectBuilder extends Object {
//     static box-impl(paramarg0: JsonObject): JsonObjectBuilder;
 // ; invalid because of -//     static build-impl(paramarg0: JsonObject): JsonObject;
 // ; invalid because of -//     static constructor-impl(paramarg0: JsonObject): JsonObject;
 // ; invalid because of -//     static equals-impl(paramarg0: JsonObject, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: JsonObject, paramarg1: JsonObject): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: JsonObject): number;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: JsonElement): void;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: boolean): void;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: string): void;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: Number): void;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: Object): void;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: string): void;
 // ; invalid because of -//     static invoke-impl(paramarg0: JsonObject, paramarg1: string, paramarg2: Function1<Object, void>): void;
 // ; invalid because of -//     static toString-impl(paramarg0: JsonObject): string;
 // ; invalid because of -    constructor(backend: JsonObject)
    // private backend: JsonObject;
    build(): JsonObject;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}