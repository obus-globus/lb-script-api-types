import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
export class UnmanagedMemory extends Object {
    static calloc(paramsize: number): PointerBase | null;
    static calloc(paramsize: UnsignedWord): PointerBase | null;
    static free(paramptr: PointerBase): void;
    static malloc(paramsize: number): PointerBase | null;
    static malloc(paramsize: UnsignedWord): PointerBase | null;
    static realloc(paramptr: PointerBase | null, paramsize: UnsignedWord): PointerBase | null;
    private constructor()
}