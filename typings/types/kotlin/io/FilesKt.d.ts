import type { File } from '../../java/io/File.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { FilePathComponents } from '../../kotlin/io/FilePathComponents.d.ts'
import type { FileTreeWalk } from '../../kotlin/io/FileTreeWalk.d.ts'
import type { FileWalkDirection } from '../../kotlin/io/FileWalkDirection.d.ts'
import type { FilesKt__UtilsKt } from '../../kotlin/io/FilesKt__UtilsKt.d.ts'
import type { OnErrorAction } from '../../kotlin/io/OnErrorAction.d.ts'
export class FilesKt extends FilesKt__UtilsKt {
    static appendBytes(paramarg0: File, paramarg1: number[]): void;
    static appendText(paramarg0: File, paramarg1: string, paramarg2: Charset): void;
    static byteBufferForEncoding(paramarg0: number, paramarg1: CharsetEncoder): ByteBuffer;
    static copyRecursively(paramarg0: File, paramarg1: File, paramarg2: boolean, paramarg3: (param0: Object, param1: Object) => OnErrorAction): boolean;
    static copyTo(paramarg0: File, paramarg1: File, paramarg2: boolean, paramarg3: number): File;
    static createTempDir(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static deleteRecursively(paramarg0: File): boolean;
    static endsWith(paramarg0: File, paramarg1: File): boolean;
    static endsWith(paramarg0: File, paramarg1: string): boolean;
    static forEachBlock(paramarg0: File, paramarg1: number, paramarg2: (param0: Object, param1: Object) => void): void;
    static forEachBlock(paramarg0: File, paramarg1: (param0: Object, param1: Object) => void): void;
    static forEachLine(paramarg0: File, paramarg1: Charset, paramarg2: (param0: Object) => void): void;
    static getExtension(paramarg0: File): string;
    static getInvariantSeparatorsPath(paramarg0: File): string;
    static getNameWithoutExtension(paramarg0: File): string;
    static getRoot(paramarg0: File): File;
    static getRootName(paramarg0: File): string;
    static isRooted(paramarg0: File): boolean;
    static newReplaceEncoder(paramarg0: Charset): CharsetEncoder;
    static normalize(paramarg0: File): File;
    static readBytes(paramarg0: File): number[];
    static readLines(paramarg0: File, paramarg1: Charset): string[];
    static readText(paramarg0: File, paramarg1: Charset): string;
    static relativeTo(paramarg0: File, paramarg1: File): File;
    static relativeToOrNull(paramarg0: File, paramarg1: File): File;
    static relativeToOrSelf(paramarg0: File, paramarg1: File): File;
    static resolve(paramarg0: File, paramarg1: File): File;
    static resolve(paramarg0: File, paramarg1: string): File;
    static resolveSibling(paramarg0: File, paramarg1: File): File;
    static resolveSibling(paramarg0: File, paramarg1: string): File;
    static startsWith(paramarg0: File, paramarg1: File): boolean;
    static startsWith(paramarg0: File, paramarg1: string): boolean;
    static subPath(paramarg0: File, paramarg1: number, paramarg2: number): File;
    static toComponents(paramarg0: File): FilePathComponents;
    static toRelativeString(paramarg0: File, paramarg1: File): string;
    static useLines(paramarg0: File, paramarg1: Charset, paramarg2: (param0: Object) => Object | null): Object | null;
    static walk(paramarg0: File, paramarg1: FileWalkDirection): FileTreeWalk;
    static walkBottomUp(paramarg0: File): FileTreeWalk;
    static walkTopDown(paramarg0: File): FileTreeWalk;
    static writeBytes(paramarg0: File, paramarg1: number[]): void;
    static writeText(paramarg0: File, paramarg1: string, paramarg2: Charset): void;
    static writeTextImpl(paramarg0: OutputStream, paramarg1: string, paramarg2: Charset): void;
}