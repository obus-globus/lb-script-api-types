import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export interface CharacterIterator extends Object, Cloneable{
    clone(): Object;
    protected clone(): Object;
    current(): string;
    first(): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(arg0: number): string;
}