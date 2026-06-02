import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Clause } from '../../../../org/apache/tika/mime/Clause.d.ts'
export class MinShouldMatchClause extends Object implements Clause {
    constructor(arg0: number, arg1: Clause[])
    // private clauses: Clause[];
    // private min: number;
    eval(arg0: number[]): boolean;
    size(): number;
    toString(): string;
}