import type { File } from '../../java/io/File.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { FilePathComponents } from '../../kotlin/io/FilePathComponents.d.ts'
import type { FileTreeWalk } from '../../kotlin/io/FileTreeWalk.d.ts'
import type { FileWalkDirection } from '../../kotlin/io/FileWalkDirection.d.ts'
import type { FilesKt__FileReadWriteKt } from '../../kotlin/io/FilesKt__FileReadWriteKt.d.ts'
export class FilesKt__FileTreeWalkKt extends FilesKt__FileReadWriteKt {
    static appendBytes(paramarg0: File, paramarg1: number[]): void;
    static appendText(paramarg0: File, paramarg1: string, paramarg2: Charset): void;
    static byteBufferForEncoding(paramarg0: number, paramarg1: CharsetEncoder): ByteBuffer;
    static forEachBlock(paramarg0: File, paramarg1: number, paramarg2: (param0: Object | null, param1: Object | null) => void): void;
    static forEachBlock(paramarg0: File, paramarg1: (param0: Object | null, param1: Object | null) => void): void;
    static forEachLine(paramarg0: File, paramarg1: Charset, paramarg2: (param0: Object | null) => void): void;
    static getRoot(paramarg0: File): File;
    static getRootName(paramarg0: File): string;
    static isRooted(paramarg0: File): boolean;
    static newReplaceEncoder(paramarg0: Charset): CharsetEncoder;
    static readBytes(paramarg0: File): number[];
    static readLines(paramarg0: File, paramarg1: Charset): string[];
    static readText(paramarg0: File, paramarg1: Charset): string;
    static subPath(paramarg0: File, paramarg1: number, paramarg2: number): File;
    static toComponents(paramarg0: File): FilePathComponents;
    static useLines(paramarg0: File, paramarg1: Charset, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static walk(paramarg0: File, paramarg1: FileWalkDirection): FileTreeWalk;
    static walkBottomUp(paramarg0: File): FileTreeWalk;
    static walkTopDown(paramarg0: File): FileTreeWalk;
    static writeBytes(paramarg0: File, paramarg1: number[]): void;
    static writeText(paramarg0: File, paramarg1: string, paramarg2: Charset): void;
    static writeTextImpl(paramarg0: OutputStream, paramarg1: string, paramarg2: Charset): void;
}