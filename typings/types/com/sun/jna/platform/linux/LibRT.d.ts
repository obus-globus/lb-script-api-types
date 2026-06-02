import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LibRT extends Library, Object{
    shm_open(arg0: string, arg1: number, arg2: number): number;
    shm_unlink(arg0: string): number;
}