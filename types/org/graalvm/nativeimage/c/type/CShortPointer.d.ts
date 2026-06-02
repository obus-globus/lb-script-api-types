import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../../../org/graalvm/word/SignedWord.d.ts'
export interface CShortPointer extends Object, PointerBase{
    addressOf(index: number): CShortPointer;
    addressOf(index: SignedWord): CShortPointer;
    read(): number;
    read(index: number): number;
    read(index: SignedWord): number;
    write(index: number, value: number): void;
    write(value: number): void;
    write(index: SignedWord, value: number): void;
}