import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefCallback } from '../../../org/cef/callback/CefCallback.d.ts'
import type { CefResourceReadCallback } from '../../../org/cef/callback/CefResourceReadCallback.d.ts'
import type { CefResourceSkipCallback } from '../../../org/cef/callback/CefResourceSkipCallback.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
import type { IntRef } from '../../../org/cef/misc/IntRef.d.ts'
import type { LongRef } from '../../../org/cef/misc/LongRef.d.ts'
import type { StringRef } from '../../../org/cef/misc/StringRef.d.ts'
import type { CefRequest } from '../../../org/cef/network/CefRequest.d.ts'
import type { CefResponse } from '../../../org/cef/network/CefResponse.d.ts'
export interface CefResourceHandler extends Object{
    cancel(): void;
    getResponseHeaders(arg0: CefResponse, arg1: IntRef, arg2: StringRef): void;
    open(arg0: CefRequest, arg1: BoolRef, arg2: CefCallback): boolean;
    processRequest(arg0: CefRequest, arg1: CefCallback): boolean;
    read(arg0: number[], arg1: number, arg2: IntRef, arg3: CefResourceReadCallback): boolean;
    readResponse(arg0: number[], arg1: number, arg2: IntRef, arg3: CefCallback): boolean;
    skip(arg0: number, arg1: LongRef, arg2: CefResourceSkipCallback): boolean;
}