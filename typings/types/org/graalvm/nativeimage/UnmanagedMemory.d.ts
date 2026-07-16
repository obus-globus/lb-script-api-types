import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
export class UnmanagedMemory extends Object {
    static calloc<T extends PointerBase>(paramsize: number): T;
    static calloc<T extends PointerBase>(paramsize: UnsignedWord): T;
    static free(paramptr: PointerBase): void;
    static malloc<T extends PointerBase>(paramsize: number): T;
    static malloc<T extends PointerBase>(paramsize: UnsignedWord): T;
    static realloc<T extends PointerBase>(paramptr: T, paramsize: UnsignedWord): T;
    private constructor()
}