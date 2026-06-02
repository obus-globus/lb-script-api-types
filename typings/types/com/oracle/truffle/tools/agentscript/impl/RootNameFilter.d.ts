import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RootNameFilter extends Object implements Predicate<string> {
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(instrument: InsightInstrument, key: InsightInstrument$Key)
    // private cache: { [key: string]: boolean };
    // private instrument: InsightInstrument;
    // private key: InsightInstrument$Key;
    // private querying: ThreadLocal<boolean>;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(rootName: string): boolean;
}