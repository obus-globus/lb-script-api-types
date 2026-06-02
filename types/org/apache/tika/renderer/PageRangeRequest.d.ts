import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderRequest } from '../../../../org/apache/tika/renderer/RenderRequest.d.ts'
export class PageRangeRequest extends Object implements RenderRequest {
    static RENDER_ALL: PageRangeRequest;
    constructor(arg0: number, arg1: number)
    readonly from: number;
    readonly to: number;
    equals(arg0: Object | null): boolean;
    getFrom(): number;
    getTo(): number;
    hashCode(): number;
}