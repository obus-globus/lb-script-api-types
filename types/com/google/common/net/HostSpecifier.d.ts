import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostSpecifier extends Object {
    static from(paramspecifier: string): HostSpecifier;
    static fromValid(paramspecifier: string): HostSpecifier;
    static isValid(paramspecifier: string): boolean;
    private constructor(canonicalForm: string)
    // private canonicalForm: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}