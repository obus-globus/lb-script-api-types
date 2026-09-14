import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Represents a value that expires at a certain time defined by {@link expiresAt}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ExpiryValue.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ExpiryValue.kt:24}
 */
export class ExpiryValue<T extends unknown> extends Object {
    constructor(value: T, expiresAt: number)
    readonly expiresAt: number;
    readonly value: T;
    component1(): T;
    component2(): number;
    copy(value: T, expiresAt: number): ExpiryValue<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isExpired(): boolean;
    toString(): string;
}