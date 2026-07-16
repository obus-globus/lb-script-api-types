import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../org/graalvm/word/SignedWord.d.ts'
import type { UnsignedWord } from '../../../org/graalvm/word/UnsignedWord.d.ts'
import type { WordBase } from '../../../org/graalvm/word/WordBase.d.ts'
export class WordFactory extends Object {
    static nullPointer<T extends PointerBase>(): T;
    static pointer<T extends PointerBase>(paramval: number): T;
    static signed<T extends SignedWord>(paramval: number): T;
    static unsigned<T extends UnsignedWord>(paramval: number): T;
    static zero<T extends WordBase>(): T;
    private constructor()
}