import type { Object } from '../../../java/lang/Object.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { StatusLine } from '../../../okhttp3/internal/http/StatusLine.d.ts'
export class StatusLine$Companion extends Object {
    get(response: Response): StatusLine;
    parse(statusLine: string): StatusLine;
}