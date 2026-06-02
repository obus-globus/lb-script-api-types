import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Clause } from '../../../../org/apache/tika/mime/Clause.d.ts'
export class OrClause extends Object implements Clause {
    constructor(arg0: Clause[])
    // private clauses: Clause[];
    eval(arg0: number[]): boolean;
    size(): number;
    toString(): string;
}