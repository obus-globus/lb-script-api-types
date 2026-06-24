import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftClient$ServiceResponse<T extends unknown> extends Record {
    constructor(body: T, etag: string, retryAfter: Duration)
    // private body: T;
    // private etag: string;
    // private retryAfter: Duration;
    body(): T;
    equals(arg0: Object | null): boolean;
    etag(): string;
    hashCode(): number;
    retryAfter(): Duration;
    toString(): string;
}