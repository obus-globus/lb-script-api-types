import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLibrary } from '../../../../oshi/jna/platform/unix/CLibrary.d.ts'
export interface AixLibc extends Object, CLibrary{
    thread_self(): number;
}