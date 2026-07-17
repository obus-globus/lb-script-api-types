import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RootNameFilter extends Object implements Predicate<string> {
    constructor(instrument: InsightInstrument, key: InsightInstrument$Key)
    // private cache: { [key: string]: boolean };
    // private instrument: InsightInstrument;
    // private key: InsightInstrument$Key;
    // private querying: ThreadLocal<boolean>;
    and(arg0: (param0: string) => boolean): (param0: string) => boolean;
    negate(): (param0: string) => boolean;
    or(arg0: (param0: string) => boolean): (param0: string) => boolean;
    test(rootName: string): boolean;
}