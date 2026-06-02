import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Symbol extends Object {
    constructor(index: number, tag: number, owner: string, name: string, value: string, data: number)
    // private data: number;
    // private index: number;
    // private info: number;
    // private name: string;
    // private owner: string;
    // private tag: number;
    // private value: string;
    getArgumentsAndReturnSizes(): number;
}