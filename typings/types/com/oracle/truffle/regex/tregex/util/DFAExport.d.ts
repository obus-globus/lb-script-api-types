import type { TruffleFile } from '../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { DFAGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFAExport extends Object {
    static exportDot(paramdfaGenerator: DFAGenerator, parampath: TruffleFile, paramshortLabels: boolean): void;
    constructor()
}