import type { JavaMap } from '../../JavaMap.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ServerSocket } from '../../java/net/ServerSocket.d.ts'
import type { Socket } from '../../java/net/Socket.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { TimeZone } from '../../java/util/TimeZone.d.ts'
import type { ThreadFactory } from '../../java/util/concurrent/ThreadFactory.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
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
    static asFactory(self: EventListener): EventListener$Factory;
    static assertLockNotHeld(self: Dispatcher): void;
    static canReuseConnectionFor(self: HttpUrl, other: HttpUrl): boolean;
    static checkDuration(name: string, duration: number, unit: TimeUnit): number;
// (invalid TS: name contains '-')     static checkDuration-HG0u8IE(name: string, duration: Duration): number;
    static closeQuietly(self: ServerSocket): void;
    static closeQuietly(self: Socket): void;
    static discard(self: Source, timeout: number, timeUnit: TimeUnit): boolean;
    static format(format: string, ...args: Object[]): string;
    static headersContentLength(self: Response): number;
    static immutableListOf<T extends unknown>(...elements: T[]): T[];
    static isHealthy(self: Socket, source: BufferedSource): boolean;
    static readBomAsCharset(self: BufferedSource, default_: Charset): Charset;
    static readFieldOrNull<T extends unknown>(instance: Object, fieldType: Class<T>, fieldName: string): T | null;
    static skipAll(self: Source, duration: number, timeUnit: TimeUnit): boolean;
    static skipAll(self: BufferedSource): void;
    static threadFactory(name: string, daemon: boolean): ThreadFactory;
    static threadName(name: string, block: () => void): void;
    static toHeaderList(self: Pair<string, string>[]): Header[];
    static toHeaders(self: Header[]): Pair<string, string>[];
    static toHexString(self: number): string;
    static toHostHeader(self: HttpUrl, includeDefaultPort: boolean): string;
    static toImmutableList<T extends unknown>(self: T[] | null): T[];
    static toImmutableList<T extends unknown>(self: T[]): T[];
    static unmodifiable<K extends unknown, V extends unknown>(self: JavaMap<K, V>): JavaMap<K, V>;
    static unmodifiable<T extends unknown>(self: T[]): T[];
}