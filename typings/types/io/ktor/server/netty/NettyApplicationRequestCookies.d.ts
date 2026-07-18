import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PipelineRequest } from '../../../../io/ktor/server/request/PipelineRequest.d.ts'
import type { RequestCookies } from '../../../../io/ktor/server/request/RequestCookies.d.ts'
export class NettyApplicationRequestCookies extends RequestCookies {
    constructor(request: PipelineRequest)
    protected fetchCookies(): JavaMap<string, string>;
}