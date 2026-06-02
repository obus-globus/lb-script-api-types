import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
export class UnmanagedMemory extends Object {
    static calloc(paramsize: number): Object | null;
    static calloc(paramsize: UnsignedWord): Object | null;
    static free(paramptr: PointerBase): void;
    static malloc(paramsize: number): Object | null;
    static malloc(paramsize: UnsignedWord): Object | null;
    static realloc(paramptr: Object | null, paramsize: UnsignedWord): Object | null;
    private constructor()
}