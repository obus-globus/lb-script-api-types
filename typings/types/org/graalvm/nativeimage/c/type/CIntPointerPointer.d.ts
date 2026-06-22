import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CIntPointer } from '../../../../../org/graalvm/nativeimage/c/type/CIntPointer.d.ts'
import type { ComparableWord } from '../../../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../../../org/graalvm/word/SignedWord.d.ts'
export interface CIntPointerPointer extends Object, PointerBase{
    addressOf(index: number): CIntPointerPointer;
    addressOf(index: SignedWord): CIntPointerPointer;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
    read(): CIntPointer;
    read(index: number): CIntPointer;
    read(index: SignedWord): CIntPointer;
    write(index: number, value: CIntPointer): void;
    write(value: CIntPointer): void;
    write(index: SignedWord, value: CIntPointer): void;
}