import type { RootCoverage } from '../../../../../../com/oracle/truffle/tools/coverage/RootCoverage.d.ts'
import type { SourceCoverage } from '../../../../../../com/oracle/truffle/tools/coverage/SourceCoverage.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LCOVPrinter extends Object {
    constructor(out: PrintStream, coverage: SourceCoverage[], strictLines: boolean)
    // private coverage: SourceCoverage[];
    // private out: PrintStream;
    // private strictLines: boolean;
    // private linesToCount(sourceCoverage: SourceCoverage): { [key: number]: number };
    print(): void;
    // private printCoveredRootCount(coveredRoots: number): void;
    // private printLineData(sourceCoverage: SourceCoverage): void;
    // private printRoot(root: RootCoverage): void;
    // private printRootCount(roots: RootCoverage[]): void;
    // private printRootCoverage(root: RootCoverage): void;
    // private printRootData(sourceCoverage: SourceCoverage): void;
    // private printSourceCoverage(sourceCoverage: SourceCoverage): void;
    // private printSourceFile(sourceCoverage: SourceCoverage): void;
    // private printSourceName(sourceCoverage: SourceCoverage): void;
    // private printTestName(): void;
}