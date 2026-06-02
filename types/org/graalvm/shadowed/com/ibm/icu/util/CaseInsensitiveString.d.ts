import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CaseInsensitiveString extends Object {
    constructor(s: string)
    // private folded: string;
    // private hash: number;
    readonly string: string;
    equals(o: Object | null): boolean;
    // private getFolded(): void;
    getString(): string;
    hashCode(): number;
    toString(): string;
}