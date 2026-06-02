import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { CCharPointer } from '../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
import type { CTypeConversion$CCharPointerHolder } from '../../../../org/graalvm/nativeimage/c/type/CTypeConversion$CCharPointerHolder.d.ts'
import type { CTypeConversion$CCharPointerPointerHolder } from '../../../../org/graalvm/nativeimage/c/type/CTypeConversion$CCharPointerPointerHolder.d.ts'
import type { PointerBase } from '../../../../org/graalvm/word/PointerBase.d.ts'
import type { UnsignedWord } from '../../../../org/graalvm/word/UnsignedWord.d.ts'
export interface CTypeConversionSupport extends Object{
    asByteBuffer(address: PointerBase, size: number): ByteBuffer;
    toCBytes(bytes: number[]): CTypeConversion$CCharPointerHolder;
    toCString(javaString: CharSequence): CTypeConversion$CCharPointerHolder;
    toCString(javaString: CharSequence, charset: Charset, buffer: CCharPointer, bufferSize: UnsignedWord): UnsignedWord;
    toCString(javaString: CharSequence, buffer: CCharPointer, bufferSize: UnsignedWord): UnsignedWord;
    toCStrings(javaStrings: CharSequence[]): CTypeConversion$CCharPointerPointerHolder;
    toJavaString(cString: CCharPointer): string;
    toJavaString(cString: CCharPointer, length: UnsignedWord): string;
    toJavaString(cString: CCharPointer, length: UnsignedWord, charset: Charset): string;
    utf8ToJavaString(utf8String: CCharPointer): string;
}