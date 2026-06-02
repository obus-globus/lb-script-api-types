import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBINode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleScanner } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleScanner.d.ts'
import type { RBBISetBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBISetBuilder.d.ts'
import type { RBBITableBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBITableBuilder.d.ts'
export class RBBIRuleBuilder extends Object {
    constructor(rules: string)
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
    build(os: OutputStream): void;
    flattenData(os: OutputStream): void;
    optimizeTables(): void;
}