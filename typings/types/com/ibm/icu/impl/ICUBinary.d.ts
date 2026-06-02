import type { ICUBinary$Authenticate } from '../../../../com/ibm/icu/impl/ICUBinary$Authenticate.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUBinary extends Object {
    static addBaseNamesInFileFolder(paramarg0: string, paramarg1: string, paramarg2: string[]): void;
    static getByteBufferFromInputStreamAndCloseStream(paramarg0: InputStream): ByteBuffer;
    static getBytes(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): number[];
    static getChars(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): string[];
    static getData(paramarg0: ClassLoader, paramarg1: string, paramarg2: string): ByteBuffer;
    static getData(paramarg0: string): ByteBuffer;
    static getInts(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): number[];
    static getLongs(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): number[];
    static getRequiredData(paramarg0: string): ByteBuffer;
    static getShorts(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): number[];
    static getString(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): string;
    static getVersionByteArrayFromCompactInt(paramarg0: number): number[];
    static getVersionInfoFromCompactInt(paramarg0: number): VersionInfo;
    static readHeader(paramarg0: ByteBuffer, paramarg1: number, paramarg2: ICUBinary$Authenticate): number;
    static readHeaderAndDataVersion(paramarg0: ByteBuffer, paramarg1: number, paramarg2: ICUBinary$Authenticate): VersionInfo;
    static skipBytes(paramarg0: ByteBuffer, paramarg1: number): void;
    static sliceWithOrder(paramarg0: ByteBuffer): ByteBuffer;
    static writeHeader(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DataOutputStream): number;
    constructor()
}