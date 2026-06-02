import type { Requirement } from '../../../com/vdurmont/semver4j/Requirement.d.ts'
import type { Semver$SemverType } from '../../../com/vdurmont/semver4j/Semver$SemverType.d.ts'
import type { Semver$VersionDiff } from '../../../com/vdurmont/semver4j/Semver$VersionDiff.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Semver extends Object implements Comparable<Semver> {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Semver$SemverType)
    readonly build: string;
    readonly major: number;
    readonly minor: number;
    readonly originalValue: string;
    readonly patch: number;
    readonly suffixTokens: string[];
    readonly type: Semver$SemverType;
    readonly value: string;
    // private areSameSuffixes(arg0: string[]): boolean;
    compareTo(arg0: Semver): number;
    diff(arg0: Semver): Semver$VersionDiff;
    diff(arg0: string): Semver$VersionDiff;
    equals(arg0: Object | null): boolean;
    getBuild(): string;
    getMajor(): number;
    getMinor(): number;
    getOriginalValue(): string;
    getPatch(): number;
    getSuffixTokens(): string[];
    getType(): Semver$SemverType;
    getValue(): string;
    // private hasPreRelease(arg0: string): boolean;
    hashCode(): number;
    isEqualTo(arg0: Semver): boolean;
    isEqualTo(arg0: string): boolean;
    isEquivalentTo(arg0: Semver): boolean;
    isEquivalentTo(arg0: string): boolean;
    isGreaterThan(arg0: Semver): boolean;
    isGreaterThan(arg0: string): boolean;
    isGreaterThanOrEqualTo(arg0: Semver): boolean;
    isGreaterThanOrEqualTo(arg0: string): boolean;
    isLowerThan(arg0: Semver): boolean;
    isLowerThan(arg0: string): boolean;
    isLowerThanOrEqualTo(arg0: Semver): boolean;
    isLowerThanOrEqualTo(arg0: string): boolean;
    isStable(): boolean;
    nextMajor(): Semver;
    nextMinor(): Semver;
    nextPatch(): Semver;
    satisfies(arg0: Requirement): boolean;
    satisfies(arg0: string): boolean;
    toStrict(): Semver;
    toString(): string;
    // private validate(arg0: Semver$SemverType): void;
    // private with(arg0: number, arg1: number, arg2: number, arg3: string[], arg4: string): Semver;
    // private with(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): Semver;
    withBuild(arg0: string): Semver;
    withClearedBuild(): Semver;
    withClearedSuffix(): Semver;
    withClearedSuffixAndBuild(): Semver;
    // private withInc(arg0: number, arg1: number, arg2: number): Semver;
    withIncMajor(): Semver;
    withIncMajor(arg0: number): Semver;
    withIncMinor(): Semver;
    withIncMinor(arg0: number): Semver;
    withIncPatch(): Semver;
    withIncPatch(arg0: number): Semver;
    withSuffix(arg0: string): Semver;
}