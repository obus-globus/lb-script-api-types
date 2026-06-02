import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLibrary } from '../../../../oshi/jna/platform/unix/CLibrary.d.ts'
export interface OpenBsdLibc extends Object, CLibrary{
    getthrid(): number;
}