import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { CCharPointer } from '../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
import type { CTypeConversion$CCharPointerHolder } from '../../../../../org/graalvm/nativeimage/c/type/CTypeConversion$CCharPointerHolder.d.ts'
import type { CTypeConversion$CCharPointerPointerHolder } from '../../../../../org/graalvm/nativeimage/c/type/CTypeConversion$CCharPointerPointerHolder.d.ts'
import type { PointerBase } from '../../../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../../../org/graalvm/word/UnsignedWord.d.ts'
export class CTypeConversion extends Object {
    static asByteBuffer(paramaddress: PointerBase, paramsize: number): ByteBuffer;
    static toBoolean(paramvalue: number): boolean;
    static toBoolean(parampointer: PointerBase): boolean;
    static toCBoolean(paramvalue: boolean): number;
    static toCBytes(parambytes: number[]): CTypeConversion$CCharPointerHolder;
    static toCString(paramjavaString: CharSequence): CTypeConversion$CCharPointerHolder;
    static toCString(paramjavaString: CharSequence, paramcharset: Charset, parambuffer: CCharPointer, parambufferSize: UnsignedWord): UnsignedWord;
    static toCString(paramjavaString: CharSequence, parambuffer: CCharPointer, parambufferSize: UnsignedWord): UnsignedWord;
    static toCStrings(paramjavaStrings: (Object | null)[]): CTypeConversion$CCharPointerPointerHolder;
    static toJavaString(paramcString: CCharPointer): string;
    static toJavaString(paramcString: CCharPointer, paramlength: UnsignedWord): string;
    static toJavaString(paramcString: CCharPointer, paramlength: UnsignedWord, paramcharset: Charset): string;
    static utf8ToJavaString(paramutf8String: CCharPointer): string;
    private constructor()
}