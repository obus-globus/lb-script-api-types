import type { Object } from '../../../java/lang/Object.d.ts'
export class CaseInsensitiveString extends Object {
    constructor(content: string)
    readonly content: string;
    // private hash: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}