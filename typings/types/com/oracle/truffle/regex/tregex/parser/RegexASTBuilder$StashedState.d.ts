import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { Sequence } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexASTBuilder$StashedState extends Record implements AutoCloseable {
    constructor(builder: RegexASTBuilder)
    // private builder: RegexASTBuilder;
    // private curGroup: Group;
    // private curSequence: Sequence;
    // private curTerm: Term;
    builder(): RegexASTBuilder;
    close(): void;
    curGroup(): Group;
    curSequence(): Sequence;
    curTerm(): Term;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}