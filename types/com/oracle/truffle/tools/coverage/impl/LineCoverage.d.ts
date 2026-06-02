import type { SourceCoverage } from '../../../../../../com/oracle/truffle/tools/coverage/SourceCoverage.d.ts'
import type { LineCoverage$LineState } from '../../../../../../com/oracle/truffle/tools/coverage/impl/LineCoverage$LineState.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LineCoverage extends Object {
    constructor(coverage: SourceCoverage, strictLines: boolean)
    // private lines: { [key: number]: LineCoverage$LineState };
    getCoverage(): number;
    getStatementCoverageCharacter(i: number): string;
}