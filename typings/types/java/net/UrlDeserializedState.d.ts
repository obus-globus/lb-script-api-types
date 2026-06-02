import type { Object } from '../../java/lang/Object.d.ts'
export class UrlDeserializedState extends Object {
    constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: string, arg5: string, arg6: number)
    // private authority: string;
    // private file: string;
    // private hashCode: number;
    // private host: string;
    // private port: number;
    // private protocol: string;
    // private ref: string;
    getAuthority(): string;
    getFile(): string;
    getHashCode(): number;
    getHost(): string;
    getPort(): number;
    getProtocol(): string;
    getRef(): string;
    reconstituteUrlString(): string;
}