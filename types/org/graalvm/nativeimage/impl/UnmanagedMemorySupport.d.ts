import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../../org/graalvm/word/UnsignedWord.d.ts'
export interface UnmanagedMemorySupport extends Object{
    calloc<T extends PointerBase>(size: UnsignedWord): T;
    free(ptr: PointerBase): void;
    malloc<T extends PointerBase>(size: UnsignedWord): T;
    realloc<T extends PointerBase>(ptr: T, size: UnsignedWord): T;
}