import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
export interface Call$Factory extends Object{
    newCall(request: Request): Call;
}