import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { InsightSourceFilter } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightSourceFilter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InsightPerContext extends Object {
    constructor(insight: InsightInstrument)
    // private functionsArray: Object[][];
    // private functionsArrayValid: Assumption;
    // private functionsForBinding: Map<InsightInstrument$Key, Object[]>;
    // private insight: InsightInstrument;
    // private sourceCache: Map<InsightSourceFilter, Map<Source, boolean>>;
    functionFor(key: InsightInstrument$Key, at: number): Object;
    getSourceCache(sourceFilter: InsightSourceFilter): Map<Source, boolean>;
    // private invalidateFunctionsArray(): void;
    onClosed(closedKey: InsightInstrument$Key): void;
    register(key: InsightInstrument$Key, function_: Object): void;
    unregister(key: InsightInstrument$Key, function_: Object): boolean;
    // private updateFunctionsArraySlow(): void;
}