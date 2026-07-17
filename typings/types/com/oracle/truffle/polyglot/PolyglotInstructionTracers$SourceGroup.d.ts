import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotInstructionTracers$SourceGroup extends Record {
    private constructor(source: Source)
    // private source: Source;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): Source;
    toString(): string;
}