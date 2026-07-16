import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultHttpHeaders {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static EMPTY_HEADERS: Map$Entry<string, string>[];
    static addDateHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Date): void;
    static addDateHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Date): void;
    static addHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Object): void;
    static addHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Object): void;
    static addIntHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: number): void;
    static addIntHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: number): void;
    static clearHeaders(paramarg0: HttpMessage): void;
    static encodeAscii(paramarg0: CharSequence, paramarg1: ByteBuf): void;
    static equalsIgnoreCase(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static getContentLength(paramarg0: HttpMessage): number;
    static getContentLength(paramarg0: HttpMessage, paramarg1: number): number;
    static getDate(paramarg0: HttpMessage): Date;
    static getDate(paramarg0: HttpMessage, paramarg1: Date): Date;
    static getDateHeader(paramarg0: HttpMessage, paramarg1: CharSequence): Date;
    static getDateHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Date): Date;
    static getDateHeader(paramarg0: HttpMessage, paramarg1: string): Date;
    static getDateHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Date): Date;
    static getHeader(paramarg0: HttpMessage, paramarg1: CharSequence): string;
    static getHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: string): string;
    static getHeader(paramarg0: HttpMessage, paramarg1: string): string;
    static getHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: string): string;
    static getHost(paramarg0: HttpMessage): string;
    static getHost(paramarg0: HttpMessage, paramarg1: string): string;
    static getIntHeader(paramarg0: HttpMessage, paramarg1: CharSequence): number;
    static getIntHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: number): number;
    static getIntHeader(paramarg0: HttpMessage, paramarg1: string): number;
    static getIntHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: number): number;
    static is100ContinueExpected(paramarg0: HttpMessage): boolean;
    static isContentLengthSet(paramarg0: HttpMessage): boolean;
    static isKeepAlive(paramarg0: HttpMessage): boolean;
    static isTransferEncodingChunked(paramarg0: HttpMessage): boolean;
    static newEntity(paramarg0: string): CharSequence;
    static removeHeader(paramarg0: HttpMessage, paramarg1: CharSequence): void;
    static removeHeader(paramarg0: HttpMessage, paramarg1: string): void;
    static removeTransferEncodingChunked(paramarg0: HttpMessage): void;
    static set100ContinueExpected(paramarg0: HttpMessage): void;
    static set100ContinueExpected(paramarg0: HttpMessage, paramarg1: boolean): void;
    static setContentLength(paramarg0: HttpMessage, paramarg1: number): void;
    static setDate(paramarg0: HttpMessage, paramarg1: Date): void;
    static setDateHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Date[]): void;
    static setDateHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Date): void;
    static setDateHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Date[]): void;
    static setDateHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Date): void;
    static setHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Object[]): void;
    static setHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: Object): void;
    static setHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Object[]): void;
    static setHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: Object): void;
    static setHost(paramarg0: HttpMessage, paramarg1: CharSequence): void;
    static setHost(paramarg0: HttpMessage, paramarg1: string): void;
    static setIntHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: number): void;
    static setIntHeader(paramarg0: HttpMessage, paramarg1: CharSequence, paramarg2: number[]): void;
    static setIntHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: number): void;
    static setIntHeader(paramarg0: HttpMessage, paramarg1: string, paramarg2: number[]): void;
    static setKeepAlive(paramarg0: HttpMessage, paramarg1: boolean): void;
    static setTransferEncodingChunked(paramarg0: HttpMessage): void;
}