import type { BigListIterator } from '../../../../../it/unimi/dsi/fastutil/BigListIterator.d.ts'
import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharBigListIterator extends BigListIterator<string>, CharBidirectionalIterator, Object{
    add<K extends Object | number | string | boolean>(arg0: K): void;
    add(arg0: string): void;
    add(arg0: string): void;
    back(arg0: number): number;
    back(arg0: number): number;
    previous(): string;
    set<K extends Object | number | string | boolean>(arg0: K): void;
    set(arg0: string): void;
    set(arg0: string): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}