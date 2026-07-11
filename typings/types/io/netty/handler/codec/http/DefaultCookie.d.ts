import type { Cookie } from '../../../../../io/netty/handler/codec/http/Cookie.d.ts'
import type { DefaultCookie as DefaultCookie_2 } from '../../../../../io/netty/handler/codec/http/cookie/DefaultCookie.d.ts'
export class DefaultCookie extends DefaultCookie_2 implements Cookie {
    static UNDEFINED_MAX_AGE: number;
    constructor(arg0: string, arg1: string)
    readonly discard: boolean;
    // private unmodifiablePorts: number[];
    comment(): string;
    commentUrl(): string;
    getComment(): string;
    getCommentUrl(): string;
    getDomain(): string;
    getMaxAge(): number;
    getName(): string;
    getPath(): string;
    getPorts(): number[];
    getValue(): string;
    getVersion(): number;
    isDiscard(): boolean;
    ports(): number[];
    setComment(arg0: string): void;
    setCommentUrl(arg0: string): void;
    setDiscard(arg0: boolean): void;
    setPorts(...arg0: number[]): void;
    setPorts(arg0: number[]): void;
    setVersion(arg0: number): void;
    version(): number;
}