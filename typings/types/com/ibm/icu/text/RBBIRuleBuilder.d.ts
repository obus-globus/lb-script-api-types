import type { RBBINode } from '../../../../com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleScanner } from '../../../../com/ibm/icu/text/RBBIRuleScanner.d.ts'
import type { RBBISetBuilder } from '../../../../com/ibm/icu/text/RBBISetBuilder.d.ts'
import type { RBBITableBuilder } from '../../../../com/ibm/icu/text/RBBITableBuilder.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBIRuleBuilder extends Object {
    constructor(arg0: string)
    // private fChainRules: boolean;
    // private fDebugEnv: string;
    // private fDefaultTree: number;
    // private fForwardTable: RBBITableBuilder;
    // private fLookAheadHardBreak: boolean;
    // private fRuleStatusVals: number[];
    // private fRules: string;
    // private fScanner: RBBIRuleScanner;
    // private fSetBuilder: RBBISetBuilder;
    // private fStatusSets: Map<number[], number>;
    // private fStrippedRules: StringBuilder;
    // private fTreeRoots: RBBINode[];
    // private fUSetNodes: RBBINode[];
    build(arg0: OutputStream): void;
    flattenData(arg0: OutputStream): void;
    optimizeTables(): void;
}