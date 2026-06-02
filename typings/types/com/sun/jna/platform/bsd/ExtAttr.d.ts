import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { LibCAPI$size_t } from '../../../../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { LibCAPI$ssize_t } from '../../../../../com/sun/jna/platform/unix/LibCAPI$ssize_t.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExtAttr extends Library, Object{
    extattr_delete_file(arg0: string, arg1: number, arg2: string): number;
    extattr_get_file(arg0: string, arg1: number, arg2: string, arg3: ByteBuffer, arg4: LibCAPI$size_t): LibCAPI$ssize_t;
    extattr_list_file(arg0: string, arg1: number, arg2: ByteBuffer, arg3: LibCAPI$size_t): LibCAPI$ssize_t;
    extattr_set_file(arg0: string, arg1: number, arg2: string, arg3: ByteBuffer, arg4: LibCAPI$size_t): LibCAPI$ssize_t;
}