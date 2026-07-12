import type { Closeable } from '../java/io/Closeable.d.ts'
import type { File } from '../java/io/File.d.ts'
import type { InputStream } from '../java/io/InputStream.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../java/lang/ClassLoader.d.ts'
import type { Socket } from '../java/net/Socket.d.ts'
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
    static appendingSink(paramarg0: File): Sink;
    static asResourceFileSystem(paramarg0: ClassLoader): FileSystem;
    static blackhole(): Sink;
    static buffer(paramarg0: Sink): BufferedSink;
    static buffer(paramarg0: Source): BufferedSource;
    static cipherSink(paramarg0: Sink, paramarg1: Cipher): CipherSink;
    static cipherSource(paramarg0: Source, paramarg1: Cipher): CipherSource;
    static hashingSink(paramarg0: Sink, paramarg1: MessageDigest): HashingSink;
    static hashingSink(paramarg0: Sink, paramarg1: Mac): HashingSink;
    static hashingSource(paramarg0: Source, paramarg1: MessageDigest): HashingSource;
    static hashingSource(paramarg0: Source, paramarg1: Mac): HashingSource;
    static inMemorySocketPair(paramarg0: number): (Object | null)[];
    static openZip(paramarg0: FileSystem, paramarg1: Path_2): FileSystem;
    static sink(paramarg0: File): Sink;
    static sink(paramarg0: File, paramarg1: boolean): Sink;
    static sink(paramarg0: OutputStream): Sink;
    static sink(paramarg0: Socket): Sink;
    static sink(paramarg0: Path[][], ...paramarg1: (Object | null)[]): Sink;
    static socket(paramarg0: Socket): Socket_2;
    static source(paramarg0: File): Source;
    static source(paramarg0: InputStream): Source;
    static source(paramarg0: Socket): Source;
    static source(paramarg0: Path[][], ...paramarg1: (Object | null)[]): Source;
    static use(paramarg0: Closeable | null, paramarg1: (param0: Object) => Object | null): Object | null;
}