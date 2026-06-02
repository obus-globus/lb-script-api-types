import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ModuleDescriptor$Version extends Object implements Comparable<ModuleDescriptor$Version> {
    static parse(paramarg0: string): ModuleDescriptor$Version;
    private constructor(arg0: string)
    // private build: Object[];
    // private pre: Object[];
    // private sequence: Object[];
    // private version: string;
    // private cmp(arg0: Object, arg1: Object): number;
    compareTo(arg0: ModuleDescriptor$Version): number;
    // private compareTokens(arg0: Object[], arg1: Object[]): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}