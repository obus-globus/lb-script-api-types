import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../org/graalvm/word/SignedWord.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
import type { WordBase } from '../../../org/graalvm/word/WordBase.d.ts'
export class WordFactory extends Object {
    static nullPointer(): PointerBase | null;
    static pointer(paramval: number): PointerBase | null;
    static signed(paramval: number): SignedWord | null;
    static signed(paramval: number): SignedWord | null;
    static unsigned(paramval: number): UnsignedWord | null;
    static unsigned(paramval: number): UnsignedWord | null;
    static zero(): WordBase | null;
    private constructor()
}