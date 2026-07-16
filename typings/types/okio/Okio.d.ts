import type { Closeable } from '../java/io/Closeable.d.ts'
import type { File } from '../java/io/File.d.ts'
import type { InputStream } from '../java/io/InputStream.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../java/lang/ClassLoader.d.ts'
import type { Socket } from '../java/net/Socket.d.ts'
import type { OpenOption } from '../java/nio/file/OpenOption.d.ts'
import type { Path } from '../java/nio/file/Path.d.ts'
import type { MessageDigest } from '../java/security/MessageDigest.d.ts'
import type { Cipher } from '../javax/crypto/Cipher.d.ts'
import type { Mac } from '../javax/crypto/Mac.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { CipherSink } from '../okio/CipherSink.d.ts'
import type { CipherSource } from '../okio/CipherSource.d.ts'
import type { FileSystem } from '../okio/FileSystem.d.ts'
import type { HashingSink } from '../okio/HashingSink.d.ts'
import type { HashingSource } from '../okio/HashingSource.d.ts'
import type { Path as Path_2 } from '../okio/Path.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Socket as Socket_2 } from '../okio/Socket.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class Okio extends Object {
    static appendingSink(self: File): Sink;
    static asResourceFileSystem(self: ClassLoader): FileSystem;
    static blackhole(): Sink;
    static buffer(self: Sink): BufferedSink;
    static buffer(self: Source): BufferedSource;
    static cipherSink(self: Sink, cipher: Cipher): CipherSink;
    static cipherSource(self: Source, cipher: Cipher): CipherSource;
    static hashingSink(self: Sink, digest: MessageDigest): HashingSink;
    static hashingSink(self: Sink, mac: Mac): HashingSink;
    static hashingSource(self: Source, digest: MessageDigest): HashingSource;
    static hashingSource(self: Source, mac: Mac): HashingSource;
    static inMemorySocketPair(maxBufferSize: number): Socket_2[];
    static openZip(self: FileSystem, zipPath: Path_2): FileSystem;
    static sink(paramarg0: File): Sink;
    static sink(self: File, append: boolean): Sink;
    static sink(self: OutputStream): Sink;
    static sink(self: Socket): Sink;
    static sink(self: Path, ...options: OpenOption[]): Sink;
    static socket(self: Socket): Socket_2;
    static source(self: File): Source;
    static source(self: InputStream): Source;
    static source(self: Socket): Source;
    static source(self: Path, ...options: OpenOption[]): Source;
    static use<R extends unknown, T extends Closeable>(self: T, block: (param0: T) => R): R;
}