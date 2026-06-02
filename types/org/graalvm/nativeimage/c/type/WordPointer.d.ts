import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../../../org/graalvm/word/SignedWord.d.ts'
import type { WordBase } from '../../../../../org/graalvm/word/WordBase.d.ts'
export interface WordPointer extends Object, PointerBase{
    addressOf(index: number): WordPointer;
    addressOf(index: SignedWord): WordPointer;
    read<T extends WordBase>(): T;
    read<T extends WordBase>(index: number): T;
    read<T extends WordBase>(index: SignedWord): T;
    write(index: number, value: WordBase): void;
    write(index: SignedWord, value: WordBase): void;
    write(value: WordBase): void;
}