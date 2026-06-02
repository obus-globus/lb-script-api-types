import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AttributedCharacterIterator$Attribute extends Object implements Serializable {
    static INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
    static LANGUAGE: AttributedCharacterIterator$Attribute;
    static READING: AttributedCharacterIterator$Attribute;
    constructor(arg0: string)
    // private name: string;
    equals(arg0: Object | null): boolean;
    getName(): string;
    hashCode(): number;
    readResolve(): Object;
    toString(): string;
}