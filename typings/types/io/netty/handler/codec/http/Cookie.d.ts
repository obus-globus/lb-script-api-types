import type { Cookie as Cookie_2 } from '../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Cookie extends Cookie_2, Object{
    comment(): string;
    commentUrl(): string;
    domain(): string;
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
    isHttpOnly(): boolean;
    isSecure(): boolean;
    maxAge(): number;
    name(): string;
    path(): string;
    ports(): number[];
    setComment(arg0: string): void;
    setCommentUrl(arg0: string): void;
    setDiscard(arg0: boolean): void;
    setDomain(arg0: string): void;
    setHttpOnly(arg0: boolean): void;
    setMaxAge(arg0: number): void;
    setPath(arg0: string): void;
    setPorts(arg0: number[]): void;
    setSecure(arg0: boolean): void;
    setValue(arg0: string): void;
    setVersion(arg0: number): void;
    setWrap(arg0: boolean): void;
    value(): string;
    version(): number;
    wrap(): boolean;
}