import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JsonUtils extends Object {
    static getBooleanOr(paramkey: string, paramnode: JsonObject, paramdefaultValue: boolean): boolean;
    static getDateOr(paramkey: string, paramnode: JsonObject): Instant;
    static getIntOr(paramkey: string, paramnode: JsonObject, paramdefaultValue: number): number;
    static getLongOr(paramkey: string, paramnode: JsonObject, paramdefaultValue: number): number;
    static getOptional<T extends unknown>(paramkey: string, paramnode: JsonObject, paramparser: (param0: JsonObject) => T): T;
    static getRequired<T extends unknown>(paramkey: string, paramnode: JsonObject, paramparser: (param0: JsonObject) => T): T;
    static getRequiredString(paramkey: string, paramnode: JsonObject): string;
    static getStringOr(paramkey: string, paramnode: JsonObject, paramdefaultValue: string): string;
    static getUuidOr(paramkey: string, paramnode: JsonObject, paramdefaultValue: UUID): UUID;
    constructor()
}