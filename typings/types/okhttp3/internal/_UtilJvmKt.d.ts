import type { Class } from '../../java/lang/Class.d.ts'
import type { ServerSocket } from '../../java/net/ServerSocket.d.ts'
import type { Socket } from '../../java/net/Socket.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { TimeZone } from '../../java/util/TimeZone.d.ts'
import type { ThreadFactory } from '../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Dispatcher } from '../../okhttp3/Dispatcher.d.ts'
import type { EventListener } from '../../okhttp3/EventListener.d.ts'
import type { EventListener$Factory } from '../../okhttp3/EventListener$Factory.d.ts'
import type { HttpUrl } from '../../okhttp3/HttpUrl.d.ts'
import type { Response } from '../../okhttp3/Response.d.ts'
import type { Header } from '../../okhttp3/internal/http2/Header.d.ts'
import type { BufferedSource } from '../../okio/BufferedSource.d.ts'
import type { Source } from '../../okio/Source.d.ts'
export class _UtilJvmKt extends Object {
    static UTC: TimeZone;
    static assertionsEnabled: boolean;
    static okHttpName: string;
    static asFactory(paramarg0: EventListener): EventListener$Factory;
    static assertLockNotHeld(paramarg0: Dispatcher): void;
    static canReuseConnectionFor(paramarg0: HttpUrl, paramarg1: HttpUrl): boolean;
    static checkDuration(paramarg0: string, paramarg1: number, paramarg2: TimeUnit): number;
//     static checkDuration-HG0u8IE(paramarg0: string, paramarg1: number): number;
 // ; invalid because of -    static closeQuietly(paramarg0: ServerSocket): void;
    static closeQuietly(paramarg0: Socket): void;
    static discard(paramarg0: Source, paramarg1: number, paramarg2: TimeUnit): boolean;
    static format(paramarg0: string, paramarg1: (Object | null)[]): string;
    static headersContentLength(paramarg0: Response): number;
    static immutableListOf(paramarg0: Object | null): (Object | null)[];
    static isHealthy(paramarg0: Socket, paramarg1: BufferedSource): boolean;
    static readBomAsCharset(paramarg0: BufferedSource, paramarg1: Charset): Charset;
    static readFieldOrNull(paramarg0: Object, paramarg1: Class<Object>, paramarg2: string): Object | null;
    static skipAll(paramarg0: Source, paramarg1: number, paramarg2: TimeUnit): boolean;
    static skipAll(paramarg0: BufferedSource): void;
    static threadFactory(paramarg0: string, paramarg1: boolean): ThreadFactory;
    static threadName(paramarg0: string, paramarg1: Function0<void>): void;
    static toHeaderList(paramarg0: Pair<string, string>[]): Header[];
    static toHeaders(paramarg0: Header[]): Pair<string, string>[];
    static toHexString(paramarg0: number): string;
    static toHexString(paramarg0: number): string;
    static toHostHeader(paramarg0: HttpUrl, paramarg1: boolean): string;
    static toImmutableList(paramarg0: Object | null): (Object | null)[];
    static toImmutableList(paramarg0: (Object | null)[]): (Object | null)[];
    static unmodifiable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
}