import type { SerializableString } from '../../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class CharacterEscapes extends Object implements Serializable {
    static ESCAPE_CUSTOM: number;
    static ESCAPE_STANDARD: number;
    constructor()
    getEscapeCodesForAscii(): number[];
    getEscapeSequence(arg0: number): SerializableString;
}