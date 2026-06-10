import type { BufferedInputStream } from '../../../../java/io/BufferedInputStream.d.ts'
import type { BufferedOutputStream } from '../../../../java/io/BufferedOutputStream.d.ts'
import type { BufferedReader } from '../../../../java/io/BufferedReader.d.ts'
import type { BufferedWriter } from '../../../../java/io/BufferedWriter.d.ts'
import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { ServerSocket } from '../../../../java/net/ServerSocket.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLConnection } from '../../../../java/net/URLConnection.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { LineIterator } from '../../../../org/apache/commons/io/LineIterator.d.ts'
import type { IOConsumer } from '../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOSupplier } from '../../../../org/apache/commons/io/function/IOSupplier.d.ts'
import type { QueueInputStream } from '../../../../org/apache/commons/io/input/QueueInputStream.d.ts'
export class IOUtils extends Object {
    static CR: number;
    static DEFAULT_BUFFER_SIZE: number;
    static DIR_SEPARATOR: string;
    static DIR_SEPARATOR_UNIX: string;
    static DIR_SEPARATOR_WINDOWS: string;
    static EMPTY_BYTE_ARRAY: number[];
    static EOF: number;
    static LF: number;
    static LINE_SEPARATOR: string;
    static LINE_SEPARATOR_UNIX: string;
    static LINE_SEPARATOR_WINDOWS: string;
    static buffer(paramarg0: InputStream): BufferedInputStream;
    static buffer(paramarg0: InputStream, paramarg1: number): BufferedInputStream;
    static buffer(paramarg0: OutputStream): BufferedOutputStream;
    static buffer(paramarg0: OutputStream, paramarg1: number): BufferedOutputStream;
    static buffer(paramarg0: Reader): BufferedReader;
    static buffer(paramarg0: Reader, paramarg1: number): BufferedReader;
    static buffer(paramarg0: Writer): BufferedWriter;
    static buffer(paramarg0: Writer, paramarg1: number): BufferedWriter;
    static byteArray(): number[];
    static byteArray(paramarg0: number): number[];
    static close(paramarg0: Closeable): void;
    static close(paramarg0: Closeable, paramarg1: (param0: IOException) => void): void;
    static close(paramarg0: (Object | null)[]): void;
    static close(paramarg0: URLConnection): void;
    static closeQuietly(paramarg0: Closeable): void;
    static closeQuietly(paramarg0: Closeable, paramarg1: (param0: Exception) => void): void;
    static closeQuietly(paramarg0: (Object | null)[]): void;
    static closeQuietly(paramarg0: InputStream): void;
    static closeQuietly(paramarg0: OutputStream): void;
    static closeQuietly(paramarg0: Reader): void;
    static closeQuietly(paramarg0: Writer): void;
    static closeQuietly(paramarg0: Closeable[]): void;
    static closeQuietly(paramarg0: ServerSocket): void;
    static closeQuietly(paramarg0: Socket): void;
    static closeQuietly(paramarg0: Selector): void;
    static closeQuietly(paramarg0: Stream<Closeable>): void;
    static consume(paramarg0: InputStream): number;
    static consume(paramarg0: Reader): number;
    static contentEquals(paramarg0: InputStream, paramarg1: InputStream): boolean;
    static contentEquals(paramarg0: Reader, paramarg1: Reader): boolean;
    static contentEqualsIgnoreEOL(paramarg0: Reader, paramarg1: Reader): boolean;
    static copy(paramarg0: InputStream, paramarg1: OutputStream): number;
    static copy(paramarg0: Reader, paramarg1: Writer): number;
    static copy(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number): number;
    static copy(paramarg0: Reader, paramarg1: Appendable): number;
    static copy(paramarg0: Reader, paramarg1: Appendable, paramarg2: CharBuffer): number;
    static copy(paramarg0: URL, paramarg1: File): number;
    static copy(paramarg0: URL, paramarg1: OutputStream): number;
    static copy(paramarg0: ByteArrayOutputStream): QueueInputStream;
    static copy(paramarg0: InputStream, paramarg1: Writer): void;
    static copy(paramarg0: InputStream, paramarg1: Writer, paramarg2: string): void;
    static copy(paramarg0: InputStream, paramarg1: Writer, paramarg2: Charset): void;
    static copy(paramarg0: Reader, paramarg1: OutputStream): void;
    static copy(paramarg0: Reader, paramarg1: OutputStream, paramarg2: string): void;
    static copy(paramarg0: Reader, paramarg1: OutputStream, paramarg2: Charset): void;
    static copyLarge(paramarg0: InputStream, paramarg1: OutputStream): number;
    static copyLarge(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number[]): number;
    static copyLarge(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number, paramarg3: number): number;
    static copyLarge(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number, paramarg3: number, paramarg4: number[]): number;
    static copyLarge(paramarg0: Reader, paramarg1: Writer): number;
    static copyLarge(paramarg0: Reader, paramarg1: Writer, paramarg2: string[]): number;
    static copyLarge(paramarg0: Reader, paramarg1: Writer, paramarg2: number, paramarg3: number): number;
    static copyLarge(paramarg0: Reader, paramarg1: Writer, paramarg2: number, paramarg3: number, paramarg4: string[]): number;
    static length(paramarg0: number[]): number;
    static length(paramarg0: string[]): number;
    static length(paramarg0: CharSequence): number;
    static length(paramarg0: (Object | null)[]): number;
    static lineIterator(paramarg0: InputStream, paramarg1: string): LineIterator;
    static lineIterator(paramarg0: InputStream, paramarg1: Charset): LineIterator;
    static lineIterator(paramarg0: Reader): LineIterator;
    static read(paramarg0: InputStream, paramarg1: number[]): number;
    static read(paramarg0: InputStream, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static read(paramarg0: Reader, paramarg1: string[]): number;
    static read(paramarg0: Reader, paramarg1: string[], paramarg2: number, paramarg3: number): number;
    static read(paramarg0: ReadableByteChannel, paramarg1: ByteBuffer): number;
    static readFully(paramarg0: InputStream, paramarg1: number): number[];
    static readFully(paramarg0: InputStream, paramarg1: number[]): void;
    static readFully(paramarg0: InputStream, paramarg1: number[], paramarg2: number, paramarg3: number): void;
    static readFully(paramarg0: Reader, paramarg1: string[]): void;
    static readFully(paramarg0: Reader, paramarg1: string[], paramarg2: number, paramarg3: number): void;
    static readFully(paramarg0: ReadableByteChannel, paramarg1: ByteBuffer): void;
    static readLines(paramarg0: InputStream): string[];
    static readLines(paramarg0: InputStream, paramarg1: string): string[];
    static readLines(paramarg0: InputStream, paramarg1: Charset): string[];
    static readLines(paramarg0: Reader): string[];
    static readLines(paramarg0: CharSequence): string[];
    static resourceToByteArray(paramarg0: string): number[];
    static resourceToByteArray(paramarg0: string, paramarg1: ClassLoader): number[];
    static resourceToString(paramarg0: string, paramarg1: Charset): string;
    static resourceToString(paramarg0: string, paramarg1: Charset, paramarg2: ClassLoader): string;
    static resourceToURL(paramarg0: string): URL;
    static resourceToURL(paramarg0: string, paramarg1: ClassLoader): URL;
    static skip(paramarg0: InputStream, paramarg1: number): number;
    static skip(paramarg0: InputStream, paramarg1: number, paramarg2: () => number[]): number;
    static skip(paramarg0: Reader, paramarg1: number): number;
    static skip(paramarg0: ReadableByteChannel, paramarg1: number): number;
    static skipFully(paramarg0: InputStream, paramarg1: number): void;
    static skipFully(paramarg0: InputStream, paramarg1: number, paramarg2: () => number[]): void;
    static skipFully(paramarg0: Reader, paramarg1: number): void;
    static skipFully(paramarg0: ReadableByteChannel, paramarg1: number): void;
    static toBufferedInputStream(paramarg0: InputStream): InputStream;
    static toBufferedInputStream(paramarg0: InputStream, paramarg1: number): InputStream;
    static toBufferedReader(paramarg0: Reader): BufferedReader;
    static toBufferedReader(paramarg0: Reader, paramarg1: number): BufferedReader;
    static toByteArray(paramarg0: InputStream): number[];
    static toByteArray(paramarg0: InputStream, paramarg1: number): number[];
    static toByteArray(paramarg0: InputStream, paramarg1: number): number[];
    static toByteArray(paramarg0: Reader): number[];
    static toByteArray(paramarg0: Reader, paramarg1: string): number[];
    static toByteArray(paramarg0: Reader, paramarg1: Charset): number[];
    static toByteArray(paramarg0: string): number[];
    static toByteArray(paramarg0: URI): number[];
    static toByteArray(paramarg0: URL): number[];
    static toByteArray(paramarg0: URLConnection): number[];
    static toCharArray(paramarg0: InputStream): string[];
    static toCharArray(paramarg0: InputStream, paramarg1: string): string[];
    static toCharArray(paramarg0: InputStream, paramarg1: Charset): string[];
    static toCharArray(paramarg0: Reader): string[];
    static toInputStream(paramarg0: CharSequence): InputStream;
    static toInputStream(paramarg0: CharSequence, paramarg1: string): InputStream;
    static toInputStream(paramarg0: CharSequence, paramarg1: Charset): InputStream;
    static toInputStream(paramarg0: string): InputStream;
    static toInputStream(paramarg0: string, paramarg1: string): InputStream;
    static toInputStream(paramarg0: string, paramarg1: Charset): InputStream;
    static toString(paramarg0: number[]): string;
    static toString(paramarg0: number[], paramarg1: string): string;
    static toString(paramarg0: InputStream): string;
    static toString(paramarg0: InputStream, paramarg1: string): string;
    static toString(paramarg0: InputStream, paramarg1: Charset): string;
    static toString(paramarg0: Reader): string;
    static toString(paramarg0: URI): string;
    static toString(paramarg0: URI, paramarg1: string): string;
    static toString(paramarg0: URI, paramarg1: Charset): string;
    static toString(paramarg0: URL): string;
    static toString(paramarg0: URL, paramarg1: string): string;
    static toString(paramarg0: URL, paramarg1: Charset): string;
    static toString(paramarg0: () => InputStream, paramarg1: Charset): string;
    static toString(paramarg0: () => InputStream, paramarg1: Charset, paramarg2: () => string): string;
    static write(paramarg0: number[], paramarg1: OutputStream): void;
    static write(paramarg0: number[], paramarg1: Writer): void;
    static write(paramarg0: number[], paramarg1: Writer, paramarg2: string): void;
    static write(paramarg0: number[], paramarg1: Writer, paramarg2: Charset): void;
    static write(paramarg0: string[], paramarg1: OutputStream): void;
    static write(paramarg0: string[], paramarg1: OutputStream, paramarg2: string): void;
    static write(paramarg0: string[], paramarg1: OutputStream, paramarg2: Charset): void;
    static write(paramarg0: string[], paramarg1: Writer): void;
    static write(paramarg0: CharSequence, paramarg1: OutputStream): void;
    static write(paramarg0: CharSequence, paramarg1: OutputStream, paramarg2: string): void;
    static write(paramarg0: CharSequence, paramarg1: OutputStream, paramarg2: Charset): void;
    static write(paramarg0: CharSequence, paramarg1: Writer): void;
    static write(paramarg0: string, paramarg1: OutputStream): void;
    static write(paramarg0: string, paramarg1: OutputStream, paramarg2: string): void;
    static write(paramarg0: string, paramarg1: OutputStream, paramarg2: Charset): void;
    static write(paramarg0: string, paramarg1: Writer): void;
    static write(paramarg0: StringBuffer, paramarg1: OutputStream): void;
    static write(paramarg0: StringBuffer, paramarg1: OutputStream, paramarg2: string): void;
    static write(paramarg0: StringBuffer, paramarg1: Writer): void;
    static writeChunked(paramarg0: number[], paramarg1: OutputStream): void;
    static writeChunked(paramarg0: string[], paramarg1: Writer): void;
    static writeLines(paramarg0: Object[], paramarg1: string, paramarg2: OutputStream): void;
    static writeLines(paramarg0: Object[], paramarg1: string, paramarg2: OutputStream, paramarg3: string): void;
    static writeLines(paramarg0: Object[], paramarg1: string, paramarg2: OutputStream, paramarg3: Charset): void;
    static writeLines(paramarg0: Object[], paramarg1: string, paramarg2: Writer): void;
    static writer(paramarg0: Appendable): Writer;
    constructor()
}