import type { Object } from '../java/lang/Object.d.ts'
export class ArgumentList extends Object {
    constructor(...arg0: string[])
    // private arguments: string[];
    // private currentIndex: number;
    hasMore(): boolean;
    next(): string;
    peek(): string;
    treatNextAsLongOption(): void;
}