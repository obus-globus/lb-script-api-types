import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LibCUtil extends Object {
    static ftruncate(paramarg0: number, paramarg1: number): number;
    static mmap(paramarg0: Pointer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): Pointer;
    static require32Bit(paramarg0: number, paramarg1: string): void;
    private constructor()
}