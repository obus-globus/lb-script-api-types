import type { NativeLongByReference } from '../../../../com/sun/jna/ptr/NativeLongByReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLibrary } from '../../../../oshi/jna/platform/unix/CLibrary.d.ts'
import type { FreeBsdLibc$FreeBsdUtmpx } from '../../../../oshi/jna/platform/unix/FreeBsdLibc$FreeBsdUtmpx.d.ts'
export interface FreeBsdLibc extends Object, CLibrary{
    getutxent(): FreeBsdLibc$FreeBsdUtmpx;
    thr_self(arg0: NativeLongByReference): number;
}