import type { AttributedCharacterIterator$Attribute } from '../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { CharacterIterator } from '../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AttributedCharacterIterator extends CharacterIterator, Object{
    clone(): Object;
    current(): string;
    first(): string;
    getAllAttributeKeys(): AttributedCharacterIterator$Attribute[];
    getAttribute(arg0: AttributedCharacterIterator$Attribute): Object;
    getAttributes(): Map<AttributedCharacterIterator$Attribute, Object>;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    getRunLimit(arg0: AttributedCharacterIterator$Attribute[]): number;
    getRunLimit(): number;
    getRunLimit(arg0: AttributedCharacterIterator$Attribute): number;
    getRunStart(arg0: AttributedCharacterIterator$Attribute[]): number;
    getRunStart(): number;
    getRunStart(arg0: AttributedCharacterIterator$Attribute): number;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(arg0: number): string;
}