import type { SourceCoverage } from '../../../../../../com/oracle/truffle/tools/coverage/SourceCoverage.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSONPrinter extends Object {
    constructor(out: PrintStream, sourceCoverages: SourceCoverage[])
    // private out: PrintStream;
    // private sourceCoverages: SourceCoverage[];
    print(): void;
}