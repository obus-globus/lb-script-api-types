import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class GsonExtensionKt extends Object {
    static array(self: JsonElement[], index: number): JsonElement[] | null;
    static array(self: JsonObject, key: string): JsonElement[] | null;
    static boolean(self: JsonElement[], index: number): boolean | null;
    static boolean(self: JsonObject, key: string): boolean | null;
    static decode<T extends unknown>(stringJson: string): T;
    static double(self: JsonElement[], index: number): number | null;
    static double(self: JsonObject, key: string): number | null;
    static getGSON(): Gson;
    static getGSON_PRETTY(): Gson;
    static int(self: JsonElement[], index: number): number | null;
    static int(self: JsonObject, key: string): number | null;
    static long(self: JsonElement[], index: number): number | null;
    static long(self: JsonObject, key: string): number | null;
    static obj(self: JsonElement[], index: number): JsonObject | null;
    static obj(self: JsonObject, key: string): JsonObject | null;
    static set(self: JsonObject, key: string, value: boolean): void;
    static set(self: JsonObject, key: string, value: string): void;
    static set(self: JsonObject, key: string, value: JsonElement): void;
    static set(self: JsonObject, key: string, value: Number): void;
    static string(self: JsonElement[], index: number): string | null;
    static string(self: JsonObject, key: string): string | null;
    static toJsonString(self: JsonElement, prettyPrint: boolean): string;
}