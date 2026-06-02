import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefResponse } from '../../../org/cef/network/CefResponse.d.ts'
export class CefResponse_N extends CefResponse implements CefNative {
    static create(): CefResponse;
    static createNative(): CefResponse;
    constructor()
    // private N_CefHandle: number;
    // private N_Dispose(arg0: number): void;
    // private N_GetError(arg0: number): CefLoadHandler$ErrorCode;
    // private N_GetHeaderByName(arg0: number, arg1: string): string;
    // private N_GetHeaderMap(arg0: number, arg1: { [key: string]: string }): void;
    // private N_GetMimeType(arg0: number): string;
    // private N_GetStatus(arg0: number): number;
    // private N_GetStatusText(arg0: number): string;
    // private N_IsReadOnly(arg0: number): boolean;
    // private N_SetError(arg0: number, arg1: CefLoadHandler$ErrorCode): void;
    // private N_SetHeaderByName(arg0: number, arg1: string, arg2: string, arg3: boolean): void;
    // private N_SetHeaderMap(arg0: number, arg1: { [key: string]: string }): void;
    // private N_SetMimeType(arg0: number, arg1: string): void;
    // private N_SetStatus(arg0: number, arg1: number): void;
    // private N_SetStatusText(arg0: number, arg1: string): void;
    dispose(): void;
    getError(): CefLoadHandler$ErrorCode;
    getHeaderByName(arg0: string): string;
    getHeaderMap(arg0: { [key: string]: string }): void;
    getMimeType(): string;
    getNativeRef(arg0: string): number;
    getStatus(): number;
    getStatusText(): string;
    isReadOnly(): boolean;
    setError(arg0: CefLoadHandler$ErrorCode): void;
    setHeaderByName(arg0: string, arg1: string, arg2: boolean): void;
    setHeaderMap(arg0: { [key: string]: string }): void;
    setMimeType(arg0: string): void;
    setNativeRef(arg0: string, arg1: number): void;
    setStatus(arg0: number): void;
    setStatusText(arg0: string): void;
}