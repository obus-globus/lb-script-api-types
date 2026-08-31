import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Represents a value that expires at a certain time defined by {@link expiresAt}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ExpiryValue.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/ExpiryValue.kt:24}
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