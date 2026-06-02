import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { MacFileUtils$FileManager$FSRef } from '../../../../../com/sun/jna/platform/mac/MacFileUtils$FileManager$FSRef.d.ts'
import type { ByteByReference } from '../../../../../com/sun/jna/ptr/ByteByReference.d.ts'
import type { PointerByReference } from '../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MacFileUtils$FileManager extends Library, Object{
    FSMoveObjectToTrashSync(arg0: MacFileUtils$FileManager$FSRef, arg1: MacFileUtils$FileManager$FSRef, arg2: number): number;
    FSPathMakeRef(arg0: string, arg1: number, arg2: ByteByReference): number;
    FSPathMakeRefWithOptions(arg0: string, arg1: number, arg2: MacFileUtils$FileManager$FSRef, arg3: ByteByReference): number;
    FSPathMoveObjectToTrashSync(arg0: string, arg1: PointerByReference, arg2: number): number;
    FSRefMakePath(arg0: MacFileUtils$FileManager$FSRef, arg1: number[], arg2: number): number;
}