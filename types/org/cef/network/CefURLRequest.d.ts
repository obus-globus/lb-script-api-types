import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefURLRequestClient } from '../../../org/cef/callback/CefURLRequestClient.d.ts'
import type { CefLoadHandler$ErrorCode } from '../../../org/cef/handler/CefLoadHandler$ErrorCode.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
import type { CefResponse } from '../../../org/cef/network/CefResponse.d.ts'
import type { CefURLRequest$Status } from '../../../org/cef/network/CefURLRequest$Status.d.ts'
export abstract class CefURLRequest extends Object {
    static create(paramarg0: CefRequest, paramarg1: CefURLRequestClient): CefURLRequest;
    constructor()
    cancel(): void;
    dispose(): void;
    finalize(): void;
    getClient(): CefURLRequestClient;
    getRequest(): CefRequest;
    getRequestError(): CefLoadHandler$ErrorCode;
    getRequestStatus(): CefURLRequest$Status;
    getResponse(): CefResponse;
}