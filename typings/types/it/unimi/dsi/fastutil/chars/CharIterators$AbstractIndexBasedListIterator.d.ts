import type { CharIterators$AbstractIndexBasedIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterators$AbstractIndexBasedIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export abstract class CharIterators$AbstractIndexBasedListIterator extends CharIterators$AbstractIndexBasedIterator implements CharListIterator {
    constructor(arg0: number, arg1: number)
    add(arg0: string): void;
    add(arg0: number, arg1: string): void;
    back(arg0: number): number;
    hasPrevious(): boolean;
    next(): string;
    nextIndex(): number;
    previous(): string;
    previousChar(): string;
    previousIndex(): number;
    remove(): void;
    set(arg0: string): void;
    set(arg0: number, arg1: string): void;
}