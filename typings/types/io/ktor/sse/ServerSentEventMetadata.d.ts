import type { Object } from '../../../java/lang/Object.d.ts'
export interface ServerSentEventMetadata<T extends unknown> extends Object{
    readonly comments: string | null;
    readonly data: T | null;
    readonly event: string | null;
    readonly id: string | null;
    readonly retry: number | null;
}