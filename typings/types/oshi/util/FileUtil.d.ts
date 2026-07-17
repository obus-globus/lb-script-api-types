import type { JavaMap } from '../../JavaMap.d.ts'
import type { NativeLong } from '../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../com/sun/jna/Pointer.d.ts'
import type { LibCAPI$size_t } from '../../com/sun/jna/platform/unix/LibCAPI$size_t.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FileUtil extends Object {
    static getIntFromFile(paramarg0: string): number;
    static getKeyValueMapFromFile(paramarg0: string, paramarg1: string): JavaMap<string, string>;
    static getLongFromFile(paramarg0: string): number;
    static getStringFromFile(paramarg0: string): string;
    static getUnsignedLongFromFile(paramarg0: string): number;
    static readAllBytes(paramarg0: string, paramarg1: boolean): number[];
    static readAllBytesAsBuffer(paramarg0: string): ByteBuffer;
    static readByteArrayFromBuffer(paramarg0: ByteBuffer, paramarg1: number[]): void;
    static readByteFromBuffer(paramarg0: ByteBuffer): number;
    static readFile(paramarg0: string): string[];
    static readFile(paramarg0: string, paramarg1: boolean): string[];
    static readFileAsBytes(paramarg0: URL): number[];
    static readIntFromBuffer(paramarg0: ByteBuffer): number;
    static readLines(paramarg0: string, paramarg1: number): string[];
    static readLines(paramarg0: string, paramarg1: number, paramarg2: boolean): string[];
    static readLongFromBuffer(paramarg0: ByteBuffer): number;
    static readNativeLongFromBuffer(paramarg0: ByteBuffer): NativeLong;
    static readPointerFromBuffer(paramarg0: ByteBuffer): Pointer;
    static readPropertiesFromFilename(paramarg0: string): JavaMap<any, any>;
    static readShortFromBuffer(paramarg0: ByteBuffer): number;
    static readSizeTFromBuffer(paramarg0: ByteBuffer): LibCAPI$size_t;
    static readSymlinkTarget(paramarg0: File): string;
    private constructor()
}