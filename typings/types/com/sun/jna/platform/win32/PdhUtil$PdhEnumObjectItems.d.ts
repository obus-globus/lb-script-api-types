import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PdhUtil$PdhEnumObjectItems extends Object {
    constructor(arg0: string[], arg1: string[])
    readonly counters: string[];
    readonly instances: string[];
    // private copyAndEmptyListForNullList(arg0: string[]): string[];
    getCounters(): string[];
    getInstances(): string[];
    toString(): string;
}