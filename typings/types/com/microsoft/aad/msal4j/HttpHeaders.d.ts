import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpHeaders extends Object {
    constructor(arg0: RequestContext)
    // private anchorMailboxHeaderValue: string;
    // private applicationNameHeaderValue: string;
    // private applicationVersionHeaderValue: string;
    // private correlationIdHeaderValue: string;
    // private headerMap: JavaMap<string, string>;
    // private headerValues: string;
    getHeaderCorrelationIdValue(): string;
    getReadonlyHeaderMap(): JavaMap<string, string>;
    // private initializeHeaders(arg0: JavaMap<string, string>): void;
    toString(): string;
}