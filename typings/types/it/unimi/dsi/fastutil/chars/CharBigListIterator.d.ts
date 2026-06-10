import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharBigListIterator extends BigListIterator<string>, CharBidirectionalIterator, Object{
    add(arg0: string): void;
    back(arg0: number): number;
    previous(): string;
    set(arg0: string): void;
    skip(arg0: number): number;
}