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
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class FilesKt__FileTreeWalkKt extends FilesKt__FileReadWriteKt {
    static appendBytes(self: File, array: number[]): void;
    static appendText(self: File, text: string, charset: Charset): void;
    static byteBufferForEncoding(chunkSize: number, encoder: CharsetEncoder): ByteBuffer;
    static forEachBlock(self: File, blockSize: number, action: (param0: number[], param1: number) => void): void;
    static forEachBlock(self: File, action: (param0: number[], param1: number) => void): void;
    static forEachLine(self: File, charset: Charset, action: (param0: string) => void): void;
    static getRoot(paramarg0: File): File;
    static getRootName(paramarg0: File): string;
    static isRooted(paramarg0: File): boolean;
    static newReplaceEncoder(self: Charset): CharsetEncoder;
    static readBytes(self: File): number[];
    static readLines(self: File, charset: Charset): string[];
    static readText(self: File, charset: Charset): string;
    static subPath(self: File, beginIndex: number, endIndex: number): File;
    static toComponents(self: File): FilePathComponents;
    static useLines<T extends unknown>(self: File, charset: Charset, block: (param0: Sequence<string>) => T): T;
    static walk(self: File, direction: FileWalkDirection): FileTreeWalk;
    static walkBottomUp(self: File): FileTreeWalk;
    static walkTopDown(self: File): FileTreeWalk;
    static writeBytes(self: File, array: number[]): void;
    static writeText(self: File, text: string, charset: Charset): void;
    static writeTextImpl(self: OutputStream, text: string, charset: Charset): void;
}