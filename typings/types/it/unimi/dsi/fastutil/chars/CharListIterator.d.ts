import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export interface CharListIterator extends CharBidirectionalIterator, Object, ListIterator<string>{
    add(arg0: string): void;
    add(arg0: string): void;
    back(arg0: number): number;
    next(): string;
    previous(): string;
    previous(): string;
    remove(): void;
    set(arg0: string): void;
    set(arg0: string): void;
    skip(arg0: number): number;
}