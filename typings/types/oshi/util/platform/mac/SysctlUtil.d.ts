import type { Memory } from '../../../../com/sun/jna/Memory.d.ts'
import type { Structure } from '../../../../com/sun/jna/Structure.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SysctlUtil extends Object {
    static sysctl(paramarg0: string, paramarg1: Structure): boolean;
    static sysctl(paramarg0: string): Memory;
    static sysctl(paramarg0: string, paramarg1: number): number;
    static sysctl(paramarg0: string, paramarg1: number, paramarg2: boolean): number;
    static sysctl(paramarg0: string, paramarg1: string): string;
    static sysctl(paramarg0: string, paramarg1: string, paramarg2: boolean): string;
    static sysctl(paramarg0: string, paramarg1: number): number;
    private constructor()
}