import type { Object } from '../../../../../java/lang/Object.d.ts'
export class URLWrapper$Parameter extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    readonly key: string;
    readonly value: string;
    getKey(): string;
    getValue(): string;
    setKey(arg0: string): void;
    setValue(arg0: string): void;
}