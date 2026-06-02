import type { Object } from '../../../../java/lang/Object.d.ts'
export class Edits$Iterator extends Object {
    private constructor(arg0: string[], arg1: number, arg2: boolean, arg3: boolean)
    // private array: string[];
    // private changed: boolean;
    // private coarse: boolean;
    // private destIndex: number;
    // private dir: number;
    // private index: number;
    // private length: number;
    // private newLength_: number;
    // private oldLength_: number;
    // private onlyChanges_: boolean;
    // private remaining: number;
    // private replIndex: number;
    // private srcIndex: number;
    destinationIndex(): number;
    destinationIndexFromSourceIndex(arg0: number): number;
    findDestinationIndex(arg0: number): boolean;
    // private findIndex(arg0: number, arg1: boolean): number;
    findSourceIndex(arg0: number): boolean;
    hasChange(): boolean;
    newLength(): number;
    next(): boolean;
    // private next(arg0: boolean): boolean;
    // private noNext(): boolean;
    oldLength(): number;
    // private previous(): boolean;
    // private readLength(arg0: number): number;
    replacementIndex(): number;
    sourceIndex(): number;
    sourceIndexFromDestinationIndex(arg0: number): number;
    toString(): string;
    // private updateNextIndexes(): void;
    // private updatePreviousIndexes(): void;
}