import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdAndData extends Object {
    static fromRawData(paramarg0: number): IdAndData;
    static getData(paramarg0: number): number;
    static getId(paramarg0: number): number;
    static removeData(paramarg0: number): number;
    static toRawData(paramarg0: number): number;
    static toRawData(paramarg0: number, paramarg1: number): number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    readonly data: number;
    readonly id: number;
    equals(arg0: Object | null): boolean;
    getData(): number;
    getId(): number;
    hashCode(): number;
    setData(arg0: number): void;
    setId(arg0: number): void;
    toRawData(): number;
    toString(): string;
    withData(arg0: number): IdAndData;
}