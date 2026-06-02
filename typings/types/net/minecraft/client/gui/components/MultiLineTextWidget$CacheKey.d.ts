import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class MultiLineTextWidget$CacheKey extends Record {
    // private maxRows: OptionalInt;
    // private maxWidth: number;
    // private message: Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxRows(): OptionalInt;
    maxWidth(): number;
    message(): Component;
    toString(): string;
}