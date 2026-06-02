import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpHeaders extends Object {
    constructor(arg0: RequestContext)
    // private anchorMailboxHeaderValue: string;
    // private applicationNameHeaderValue: string;
    // private applicationVersionHeaderValue: string;
    // private correlationIdHeaderValue: string;
    // private headerMap: { [key: string]: string };
    // private headerValues: string;
    getHeaderCorrelationIdValue(): string;
    getReadonlyHeaderMap(): { [key: string]: string };
    // private initializeHeaders(arg0: { [key: string]: string }): void;
    toString(): string;
}