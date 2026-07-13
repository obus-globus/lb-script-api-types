import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class XstsAuthProperties extends Record {
    constructor(sandboxId: string, userTokens: string[])
    // private sandboxId: string;
    /*not mapped: */ sandboxId(): string;
    // private userTokens: string[];
    /*not mapped: */ userTokens(): string[];
    component1(): string;
    component2(): string[];
    copy(sandboxId: string, userTokens: string[]): XstsAuthProperties;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}