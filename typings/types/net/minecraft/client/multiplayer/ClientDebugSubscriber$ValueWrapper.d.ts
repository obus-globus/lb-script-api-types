import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientDebugSubscriber$ValueWrapper<T extends unknown> extends Record {
    private constructor(value: T, expiresAfterTime: number)
    // private expiresAfterTime: number;
    // private value: T;
    equals(o: Object | null): boolean;
    expiresAfterTime(): number;
    hasExpired(gameTime: number): boolean;
    hashCode(): number;
    toString(): string;
    value(): T;
}