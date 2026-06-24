import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Jwt extends Record {
    static parse(paramarg0: string): Jwt;
    constructor(header: JsonObject, payload: JsonObject, signature: number[])
    // private header: JsonObject;
    // private payload: JsonObject;
    // private signature: number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    header(): JsonObject;
    payload(): JsonObject;
    signature(): number[];
    toString(): string;
}