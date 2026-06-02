import type { Symbol } from '../../../../../../com/oracle/truffle/api/impl/asm/Symbol.d.ts'
export class SymbolTable$Entry extends Symbol {
    constructor(index: number, tag: number, data: number, hashCode: number)
    constructor(index: number, tag: number, value: string, hashCode: number)
    constructor(index: number, tag: number, value: string, data: number, hashCode: number)
    constructor(index: number, tag: number, name: string, value: string, hashCode: number)
    constructor(index: number, tag: number, owner: string, name: string, value: string, data: number, hashCode: number)
    // private hashCode: number;
    // private next: SymbolTable$Entry;
}