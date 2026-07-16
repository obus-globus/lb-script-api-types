import type { Memory } from '../../../../../com/sun/jna/Memory.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OpenBsdSysctlUtil extends Object {
    static sysctl(paramarg0: number[], paramarg1: Structure): boolean;
    static sysctl(paramarg0: number[]): Memory;
    static sysctl(paramarg0: number[], paramarg1: number): number;
    static sysctl(paramarg0: string, paramarg1: number): number;
    static sysctl(paramarg0: number[], paramarg1: string): string;
    static sysctl(paramarg0: string, paramarg1: string): string;
    private constructor()
}