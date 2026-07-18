import type { ServerSentEventMetadata } from '../../../io/ktor/sse/ServerSentEventMetadata.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypedServerSentEvent<T extends unknown> extends Object implements ServerSentEventMetadata<T> {
    constructor(data: T | null, event: string | null, id: string | null, retry: number | null, comments: string | null)
    readonly comments: string | null;
    readonly data: T | null;
    readonly event: string | null;
    readonly id: string | null;
    readonly retry: number | null;
    component1(): T | null;
    component2(): string | null;
    component3(): string | null;
    component4(): number | null;
    component5(): string | null;
    copy(data: T | null, event: string | null, id: string | null, retry: number | null, comments: string | null): TypedServerSentEvent<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(serializer: (param0: T) => string): string;
    toString(): string;
}