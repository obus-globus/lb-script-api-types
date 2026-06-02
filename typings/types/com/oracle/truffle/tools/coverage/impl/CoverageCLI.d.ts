import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceCoverage } from '../../../../../../com/oracle/truffle/tools/coverage/SourceCoverage.d.ts'
import type { LineCoverage } from '../../../../../../com/oracle/truffle/tools/coverage/impl/LineCoverage.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CoverageCLI extends Object {
    constructor(out: PrintStream, coverage: SourceCoverage[], strictLines: boolean)
    // private coverage: SourceCoverage[];
    // private format: string;
    // private out: PrintStream;
    // private strictLines: boolean;
    // private summaryHeader: string;
    // private summaryHeaderLen: number;
    printHistogramOutput(): void;
    // private printLine(): void;
    // private printLinesLegend(): void;
    // private printLinesOfSource(source: Source, lineCoverage: LineCoverage): void;
    printLinesOutput(): void;
    // private printSummaryHeader(): void;
    // private sortCoverage(): void;
}