import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Request<T extends Request<T>> extends Object {
    static cookie(paramconnection: HttpURLConnection, paramkey: string, paramvalue: string): void;
    static delete(paramurl: string): Request<Object>;
    static get(paramurl: string): Request<Object>;
    static get(paramurl: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<Object>;
    static getHeader(paramconnection: HttpURLConnection, paramheader: string): string;
    static getRetryAfterHeader(paramconnection: HttpURLConnection): number;
    static post(paramuri: string, paramcontent: string): Request<Object>;
    static post(paramuri: string, paramcontent: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<Object>;
    static put(paramurl: string, paramcontent: string): Request<Object>;
    static put(paramurl: string, paramcontent: string, paramconnectTimeoutMillis: number, paramreadTimeoutMillis: number): Request<Object>;
    constructor(url: string, connectTimeout: number, readTimeout: number)
    // private connected: boolean;
    // private connection: HttpURLConnection;
    // private url: string;
    addSnapshotHeader(isSnapshot: boolean): void;
    connect(): T;
    cookie(key: string, value: string): void;
    // private dispose(): void;
    doConnect(): T;
    getHeader(header: string): string;
    getRetryAfterHeader(): number;
    // private read(in_: InputStream): string;
    responseCode(): number;
    text(): string;
}