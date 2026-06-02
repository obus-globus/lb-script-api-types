import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientDebugSubscriber$ValueWrapper<T extends Object | number | string | boolean> extends Record {
    // private expiresAfterTime: number;
    // private value: T;
    equals(o: Object | null): boolean;
    expiresAfterTime(): number;
    hasExpired(gameTime: number): boolean;
    hashCode(): number;
    toString(): string;
    value(): T;
}