import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InsightSourceFilter extends Object implements Predicate<Source> {
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(insight: InsightInstrument, key: InsightInstrument$Key)
    // private insight: InsightInstrument;
    // private key: InsightInstrument$Key;
    // private querying: ThreadLocal<boolean>;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    // private realCheck(src: Source): boolean;
    test(src: Source): boolean;
}