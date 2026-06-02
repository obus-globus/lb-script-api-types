import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Edits$Iterator extends Object {
    private constructor(a: string[], len: number, oc: boolean, crs: boolean)
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
    destinationIndexFromSourceIndex(i: number): number;
    findDestinationIndex(i: number): boolean;
    // private findIndex(i: number, findSource: boolean): number;
    findSourceIndex(i: number): boolean;
    hasChange(): boolean;
    newLength(): number;
    next(): boolean;
    // private next(onlyChanges: boolean): boolean;
    // private noNext(): boolean;
    oldLength(): number;
    // private previous(): boolean;
    // private readLength(head: number): number;
    replacementIndex(): number;
    sourceIndex(): number;
    sourceIndexFromDestinationIndex(i: number): number;
    toString(): string;
    // private updateNextIndexes(): void;
    // private updatePreviousIndexes(): void;
}