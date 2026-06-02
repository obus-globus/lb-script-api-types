import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../../../org/graalvm/word/SignedWord.d.ts'
export interface CFloatPointer extends Object, PointerBase{
    addressOf(index: number): CFloatPointer;
    addressOf(index: SignedWord): CFloatPointer;
    read(): number;
    read(index: number): number;
    read(index: SignedWord): number;
    write(value: number): void;
    write(index: number, value: number): void;
    write(index: SignedWord, value: number): void;
}