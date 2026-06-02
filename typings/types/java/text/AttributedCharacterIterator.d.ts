import type { AttributedCharacterIterator$Attribute } from '../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { CharacterIterator } from '../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AttributedCharacterIterator extends CharacterIterator, Object{
    getAllAttributeKeys(): AttributedCharacterIterator$Attribute[];
    getAttribute(arg0: AttributedCharacterIterator$Attribute): Object;
    getAttributes(): Map<AttributedCharacterIterator$Attribute, Object>;
    getRunLimit(arg0: AttributedCharacterIterator$Attribute[]): number;
    getRunLimit(): number;
    getRunLimit(arg0: AttributedCharacterIterator$Attribute): number;
    getRunStart(arg0: AttributedCharacterIterator$Attribute[]): number;
    getRunStart(): number;
    getRunStart(arg0: AttributedCharacterIterator$Attribute): number;
}