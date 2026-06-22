import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefAuthCallback } from '../../../org/cef/callback/CefAuthCallback.d.ts'
import type { CefNative } from '../../../org/cef/callback/CefNative.d.ts'
import type { CefURLRequest } from '../../../org/cef/network/CefURLRequest.d.ts'
export interface CefURLRequestClient extends Object, CefNative{
    getAuthCredentials(arg0: boolean, arg1: string, arg2: number, arg3: string, arg4: string, arg5: CefAuthCallback): boolean;
    getNativeRef(arg0: string): number;
    onDownloadData(arg0: CefURLRequest, arg1: number[], arg2: number): void;
    onDownloadProgress(arg0: CefURLRequest, arg1: number, arg2: number): void;
    onRequestComplete(arg0: CefURLRequest): void;
    onUploadProgress(arg0: CefURLRequest, arg1: number, arg2: number): void;
    setNativeRef(arg0: string, arg1: number): void;
}