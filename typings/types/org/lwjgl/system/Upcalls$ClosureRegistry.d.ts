import type { Object } from '../../../java/lang/Object.d.ts'
import type { FFIClosure } from '../../../org/lwjgl/system/libffi/FFIClosure.d.ts'
export interface Upcalls$ClosureRegistry extends Object{
    get(arg0: number): FFIClosure;
    put(arg0: number, arg1: FFIClosure): void;
    remove(arg0: number): FFIClosure;
}