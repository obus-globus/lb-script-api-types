import type { Object } from '../java/lang/Object.d.ts'
import type { Comparable } from '../java/lang/Comparable.d.ts'
import type { KotlinVersion$Companion } from '../kotlin/KotlinVersion$Companion.d.ts'
export class KotlinVersion extends Object implements Comparable<KotlinVersion> {
    static CURRENT: KotlinVersion;
    static Companion: KotlinVersion$Companion;
    static MAX_COMPONENT_VALUE: number;
    constructor(major: number, minor: number)
    constructor(major: number, minor: number, patch: number)
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    // private version: number;
    compareTo(other: KotlinVersion): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isAtLeast(major: number, minor: number): boolean;
    isAtLeast(major: number, minor: number, patch: number): boolean;
    toString(): string;
    // private versionOf(major: number, minor: number, patch: number): number;
}