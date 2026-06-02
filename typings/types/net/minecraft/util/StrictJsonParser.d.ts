import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StrictJsonParser extends Object {
    static parse(paramreader: Reader): JsonElement;
    static parse(paramjson: string): JsonElement;
    constructor()
}