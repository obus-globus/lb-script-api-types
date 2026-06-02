import type { IOException } from '../java/io/IOException.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export interface Callback extends Object{
    onFailure(call: Call, e: IOException): void;
    onResponse(call: Call, response: Response): void;
}