import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Clause } from '../../../../org/apache/tika/mime/Clause.d.ts'
import type { MimeType } from '../../../../org/apache/tika/mime/MimeType.d.ts'
export class Magic extends Object implements Comparable<Magic>, Clause {
    constructor(arg0: MimeType, arg1: number, arg2: Clause)
    // private clause: Clause;
    // private priority: number;
    // private string: string;
    // private type: MimeType;
    compareTo(arg0: Magic): number;
    equals(arg0: Object | null): boolean;
    eval(arg0: number[]): boolean;
    getPriority(): number;
    getType(): MimeType;
    hashCode(): number;
    size(): number;
    toString(): string;
}