import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../../../org/graalvm/word/SignedWord.d.ts'
export interface CCharPointerPointer extends Object, PointerBase{
    addressOf(index: number): CCharPointerPointer;
    addressOf(index: SignedWord): CCharPointerPointer;
    read(): CCharPointer;
    read(index: number): CCharPointer;
    read(index: SignedWord): CCharPointer;
    write(index: number, value: CCharPointer): void;
    write(value: CCharPointer): void;
    write(index: SignedWord, value: CCharPointer): void;
}