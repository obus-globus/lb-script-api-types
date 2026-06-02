import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export abstract class CollationKey extends Object implements Comparable<CollationKey> {
    constructor(arg0: string)
    // private source: string;
    compareTo(arg0: CollationKey): number;
    getSourceString(): string;
    toByteArray(): number[];
}