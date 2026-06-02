import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { AssertionError } from '../../java/lang/AssertionError.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
export class JvmCoreKt extends Object {
    static asSink(paramarg0: OutputStream): RawSink;
    static asSource(paramarg0: InputStream): RawSource;
    static isAndroidGetsocknameError(paramarg0: AssertionError): boolean;
}