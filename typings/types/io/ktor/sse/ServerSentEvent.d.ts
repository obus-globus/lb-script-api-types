import type { ServerSentEventMetadata } from '../../../io/ktor/sse/ServerSentEventMetadata.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ServerSentEvent extends Object implements ServerSentEventMetadata<string> {
    constructor(data: string | null, event: string | null, id: string | null, retry: number | null, comments: string | null)
    readonly comments: string | null;
    readonly data: string | null;
    readonly event: string | null;
    readonly id: string | null;
    readonly retry: number | null;
    component1(): string | null;
    component2(): string | null;
    component3(): string | null;
    component4(): number | null;
    component5(): string | null;
    copy(data: string | null, event: string | null, id: string | null, retry: number | null, comments: string | null): ServerSentEvent;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}