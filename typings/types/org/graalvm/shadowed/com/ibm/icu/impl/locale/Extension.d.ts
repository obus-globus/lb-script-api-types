import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class Extension extends Object {
    constructor(key: string)
    constructor(key: string, value: string)
    // private _key: string;
    // private _value: string;
    getID(): string;
    getKey(): string;
    getValue(): string;
    toString(): string;
}