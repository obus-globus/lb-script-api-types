import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUBinary$Authenticate } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUBinary$Authenticate.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export class ICUBinary extends Object {
    static addBaseNamesInFileFolder(paramfolder: string, paramsuffix: string, paramnames: string[]): void;
    static getByteBufferFromInputStreamAndCloseStream(paramis: InputStream): ByteBuffer;
    static getBytes(parambytes: ByteBuffer, paramlength: number, paramadditionalSkipLength: number): number[];
    static getChars(parambytes: ByteBuffer, paramlength: number, paramadditionalSkipLength: number): string[];
    static getData(paramloader: ClassLoader, paramresourceName: string, paramitemPath: string): ByteBuffer;
    static getData(paramitemPath: string): ByteBuffer;
    static getInts(parambytes: ByteBuffer, paramlength: number, paramadditionalSkipLength: number): number[];
    static getLongs(parambytes: ByteBuffer, paramlength: number, paramadditionalSkipLength: number): number[];
    static getRequiredData(paramitemPath: string): ByteBuffer;
    static getShorts(parambytes: ByteBuffer, paramlength: number, paramadditionalSkipLength: number): number[];
    static getString(parambytes: ByteBuffer, paramlength: number, paramadditionalSkipLength: number): string;
    static getVersionByteArrayFromCompactInt(paramversion: number): number[];
    static getVersionInfoFromCompactInt(paramversion: number): VersionInfo;
    static readHeader(parambytes: ByteBuffer, paramdataFormat: number, paramauthenticate: ICUBinary$Authenticate): number;
    static readHeaderAndDataVersion(parambytes: ByteBuffer, paramdataFormat: number, paramauthenticate: ICUBinary$Authenticate): VersionInfo;
    static skipBytes(parambytes: ByteBuffer, paramskipLength: number): void;
    static sliceWithOrder(parambytes: ByteBuffer): ByteBuffer;
    static writeHeader(paramdataFormat: number, paramformatVersion: number, paramdataVersion: number, paramdos: DataOutputStream): number;
    constructor()
}