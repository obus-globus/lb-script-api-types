import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefURLRequestClient } from '../../../org/cef/callback/CefURLRequestClient.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
import type { CefResponse } from '../../../org/cef/network/CefResponse.d.ts'
import type { CefURLRequest } from '../../../org/cef/network/CefURLRequest.d.ts'
import type { CefURLRequest$Status } from '../../../org/cef/network/CefURLRequest$Status.d.ts'
export class CefURLRequest_N extends CefURLRequest implements CefNative {
    static create(paramarg0: CefRequest, paramarg1: CefURLRequestClient): CefURLRequest;
    static createNative(paramarg0: CefRequest, paramarg1: CefURLRequestClient): CefURLRequest;
    constructor(arg0: CefRequest, arg1: CefURLRequestClient)
    // private N_CefHandle: number;
    // private client_: CefURLRequestClient;
    // private request_: CefRequest;
    // private N_Cancel(arg0: number): void;
    // private N_Create(arg0: CefRequest, arg1: CefURLRequestClient): void;
    // private N_Dispose(arg0: number): void;
    // private N_GetRequestError(arg0: number): CefLoadHandler$ErrorCode;
    // private N_GetRequestStatus(arg0: number): CefURLRequest$Status;
    // private N_GetResponse(arg0: number): CefResponse;
    cancel(): void;
    dispose(): void;
    getClient(): CefURLRequestClient;
    getNativeRef(arg0: string): number;
    getRequest(): CefRequest;
    getRequestError(): CefLoadHandler$ErrorCode;
    getRequestStatus(): CefURLRequest$Status;
    getResponse(): CefResponse;
    setNativeRef(arg0: string, arg1: number): void;
}