import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Traverser } from '../../../../com/google/common/graph/Traverser.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { ByteProcessor } from '../../../../com/google/common/io/ByteProcessor.d.ts'
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { FileWriteMode } from '../../../../com/google/common/io/FileWriteMode.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { BufferedReader } from '../../../../java/io/BufferedReader.d.ts'
import type { BufferedWriter } from '../../../../java/io/BufferedWriter.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { MappedByteBuffer } from '../../../../java/nio/MappedByteBuffer.d.ts'
import type { FileChannel$MapMode } from '../../../../java/nio/channels/FileChannel$MapMode.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Files extends Object {
    static append(paramfrom: CharSequence, paramto: File, paramcharset: Charset): void;
    static asByteSink(paramfile: File, ...parammodes: FileWriteMode[]): ByteSink;
    static asByteSource(paramfile: File): ByteSource;
    static asCharSink(paramfile: File, paramcharset: Charset, ...parammodes: FileWriteMode[]): CharSink;
    static asCharSource(paramfile: File, paramcharset: Charset): CharSource;
    static copy(paramfrom: File, paramto: File): void;
    static copy(paramfrom: File, paramto: OutputStream): void;
    static copy(paramfrom: File, paramcharset: Charset, paramto: Appendable): void;
    static createParentDirs(paramfile: File): void;
    static createTempDir(): File;
    static equal(paramfile1: File, paramfile2: File): boolean;
    static fileTraverser(): Traverser<File>;
    static getFileExtension(paramfullName: string): string;
    static getNameWithoutExtension(paramfile: string): string;
    static hash(paramfile: File, paramhashFunction: HashFunction): HashCode;
    static isDirectory(): (param0: File) => boolean;
    static isFile(): (param0: File) => boolean;
    static map(paramfile: File): MappedByteBuffer;
    static map(paramfile: File, parammode: FileChannel$MapMode): MappedByteBuffer;
    static map(paramfile: File, parammode: FileChannel$MapMode, paramsize: number): MappedByteBuffer;
    static move(paramfrom: File, paramto: File): void;
    static newReader(paramfile: File, paramcharset: Charset): BufferedReader;
    static newWriter(paramfile: File, paramcharset: Charset): BufferedWriter;
    static readBytes(paramfile: File, paramprocessor: ByteProcessor<Object>): Object | null;
    static readFirstLine(paramfile: File, paramcharset: Charset): string;
    static readLines(paramfile: File, paramcharset: Charset, paramcallback: LineProcessor<Object>): Object | null;
    static readLines(paramfile: File, paramcharset: Charset): string[];
    static simplifyPath(parampathname: string): string;
    static toByteArray(paramfile: File): number[];
    static toString(paramfile: File, paramcharset: Charset): string;
    static touch(paramfile: File): void;
    static write(paramfrom: number[], paramto: File): void;
    static write(paramfrom: CharSequence, paramto: File, paramcharset: Charset): void;
    private constructor()
}