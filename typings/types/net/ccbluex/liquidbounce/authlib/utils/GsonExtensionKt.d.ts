import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class GsonExtensionKt extends Object {
    static array(paramarg0: JsonElement[], paramarg1: number): JsonElement[];
    static array(paramarg0: JsonObject, paramarg1: string): JsonElement[];
    static boolean(paramarg0: JsonElement[], paramarg1: number): boolean;
    static boolean(paramarg0: JsonObject, paramarg1: string): boolean;
    static decode(paramarg0: string): Object | null;
    static double(paramarg0: JsonElement[], paramarg1: number): number;
    static double(paramarg0: JsonObject, paramarg1: string): number;
    static getGSON(): Gson;
    static getGSON_PRETTY(): Gson;
    static int(paramarg0: JsonElement[], paramarg1: number): number;
    static int(paramarg0: JsonObject, paramarg1: string): number;
    static long(paramarg0: JsonElement[], paramarg1: number): number;
    static long(paramarg0: JsonObject, paramarg1: string): number;
    static obj(paramarg0: JsonElement[], paramarg1: number): JsonObject;
    static obj(paramarg0: JsonObject, paramarg1: string): JsonObject;
    static set(paramarg0: JsonObject, paramarg1: string, paramarg2: boolean): void;
    static set(paramarg0: JsonObject, paramarg1: string, paramarg2: string): void;
    static set(paramarg0: JsonObject, paramarg1: string, paramarg2: JsonElement): void;
    static set(paramarg0: JsonObject, paramarg1: string, paramarg2: Number): void;
    static string(paramarg0: JsonElement[], paramarg1: number): string;
    static string(paramarg0: JsonObject, paramarg1: string): string;
    static toJsonString(paramarg0: JsonElement, paramarg1: boolean): string;
}