import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { RootCoverage } from '../../../../../com/oracle/truffle/tools/coverage/RootCoverage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceCoverage extends Object {
    constructor(source: Source, roots: RootCoverage[])
    readonly roots: RootCoverage[];
    readonly source: Source;
    getRoots(): RootCoverage[];
    getSource(): Source;
}