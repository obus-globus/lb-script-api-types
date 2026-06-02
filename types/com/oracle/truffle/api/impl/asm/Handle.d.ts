import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Handle extends Object {
    constructor(tag: number, owner: string, name: string, descriptor: string)
    constructor(tag: number, owner: string, name: string, descriptor: string, isInterface: boolean)
    // private descriptor: string;
    // private isInterface: boolean;
    readonly name: string;
    readonly owner: string;
    readonly tag: number;
    equals(object: Object | null): boolean;
    getDesc(): string;
    getName(): string;
    getOwner(): string;
    getTag(): number;
    hashCode(): number;
    isInterface(): boolean;
    toString(): string;
}