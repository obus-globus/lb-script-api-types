import type { Object } from '../../../java/lang/Object.d.ts'
export class Handle extends Object {
    constructor(arg0: number, arg1: string, arg2: string, arg3: string)
    constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean)
    // private descriptor: string;
    // private isInterface: boolean;
    readonly name: string;
    readonly owner: string;
    readonly tag: number;
    equals(arg0: Object | null): boolean;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getTag(): number;
    hashCode(): number;
    isInterface(): boolean;
    toString(): string;
}