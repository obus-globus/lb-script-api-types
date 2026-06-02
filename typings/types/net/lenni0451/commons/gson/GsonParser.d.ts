import type { JsonReader } from '../../../../com/google/gson/stream/JsonReader.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonParser extends Object {
    static parse(paramarg0: JsonReader): GsonElement;
    static parse(paramarg0: Reader): GsonElement;
    static parse(paramarg0: string): GsonElement;
    private constructor()
}