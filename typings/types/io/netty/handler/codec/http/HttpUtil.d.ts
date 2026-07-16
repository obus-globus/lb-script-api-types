import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpUtil extends Object {
    static formatHostnameForHttp(paramarg0: InetSocketAddress): string;
    static getCharset(paramarg0: HttpMessage): Charset;
    static getCharset(paramarg0: HttpMessage, paramarg1: Charset): Charset;
    static getCharset(paramarg0: CharSequence): Charset;
    static getCharset(paramarg0: CharSequence, paramarg1: Charset): Charset;
    static getCharsetAsSequence(paramarg0: HttpMessage): CharSequence;
    static getCharsetAsSequence(paramarg0: CharSequence): CharSequence;
    static getCharsetAsString(paramarg0: HttpMessage): CharSequence;
    static getContentLength(paramarg0: HttpMessage, paramarg1: number): number;
    static getContentLength(paramarg0: HttpMessage): number;
    static getMimeType(paramarg0: HttpMessage): CharSequence;
    static getMimeType(paramarg0: CharSequence): CharSequence;
    static is100ContinueExpected(paramarg0: HttpMessage): boolean;
    static isAsteriskForm(paramarg0: string): boolean;
    static isAsteriskForm(paramarg0: URI): boolean;
    static isContentLengthSet(paramarg0: HttpMessage): boolean;
    static isEncodingSafeStartLineToken(paramarg0: CharSequence): boolean;
    static isKeepAlive(paramarg0: HttpMessage): boolean;
    static isOriginForm(paramarg0: string): boolean;
    static isOriginForm(paramarg0: URI): boolean;
    static isTransferEncodingChunked(paramarg0: HttpMessage): boolean;
    static normalizeAndGetContentLength(paramarg0: CharSequence[], paramarg1: boolean, paramarg2: boolean): number;
    static set100ContinueExpected(paramarg0: HttpMessage, paramarg1: boolean): void;
    static setContentLength(paramarg0: HttpMessage, paramarg1: number): void;
    static setKeepAlive(paramarg0: Map$Entry<string, string>[], paramarg1: HttpVersion, paramarg2: boolean): void;
    static setKeepAlive(paramarg0: HttpMessage, paramarg1: boolean): void;
    static setTransferEncodingChunked(paramarg0: HttpMessage, paramarg1: boolean): void;
    private constructor()
}