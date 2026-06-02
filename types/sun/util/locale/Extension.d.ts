import type { Object } from '../../../java/lang/Object.d.ts'
export class Extension extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private id: string;
    readonly key: string;
    readonly value: string;
    getID(): string;
    getKey(): string;
    getValue(): string;
    setValue(arg0: string): void;
    toString(): string;
}