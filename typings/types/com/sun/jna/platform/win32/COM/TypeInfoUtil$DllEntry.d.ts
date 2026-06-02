import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeInfoUtil$DllEntry extends Object {
    constructor(arg0: string, arg1: string, arg2: number)
    readonly dllName: string;
    readonly name: string;
    readonly ordinal: number;
    getDllName(): string;
    getName(): string;
    getOrdinal(): number;
    setDllName(arg0: string): void;
    setName(arg0: string): void;
    setOrdinal(arg0: number): void;
}