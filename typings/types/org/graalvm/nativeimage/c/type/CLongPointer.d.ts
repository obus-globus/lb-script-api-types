import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComparableWord } from '../../../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { SignedWord } from '../../../../../org/graalvm/word/SignedWord.d.ts'
export interface CLongPointer extends Object, PointerBase{
    addressOf(index: number): CLongPointer;
    addressOf(index: SignedWord): CLongPointer;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
    read(): number;
    read(index: number): number;
    read(index: SignedWord): number;
    write(index: number, value: number): void;
    write(value: number): void;
    write(index: SignedWord, value: number): void;
}