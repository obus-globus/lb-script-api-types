import type { Cookie as Cookie_2 } from '../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Cookie extends Cookie_2, Object{
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
    maxAge(): number;
    ports(): number[];
    setComment(arg0: string): void;
    setCommentUrl(arg0: string): void;
    setDiscard(arg0: boolean): void;
    setMaxAge(arg0: number): void;
    setPorts(arg0: number[]): void;
    setPorts(arg0: number[]): void;
    setVersion(arg0: number): void;
    version(): number;
}