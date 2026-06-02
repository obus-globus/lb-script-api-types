import type { Object } from '../../../../java/lang/Object.d.ts'
export class PerfDataUtil$PerfCounter extends Object {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly baseCounter: boolean;
    readonly counter: string;
    readonly instance: string;
    readonly object: string;
    getCounter(): string;
    getCounterPath(): string;
    getInstance(): string;
    getObject(): string;
    isBaseCounter(): boolean;
}