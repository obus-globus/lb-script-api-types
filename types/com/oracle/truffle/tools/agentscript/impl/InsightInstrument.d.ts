import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ContextLocal } from '../../../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { AgentObject } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AgentObject.d.ts'
import type { AgentType } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AgentType.d.ts'
import type { IgnoreSources } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/IgnoreSources.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { InsightPerContext } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightPerContext.d.ts'
import type { InsightPerSource } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightPerSource.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../../../org/graalvm/options/OptionKey.d.ts'
export class InsightInstrument extends TruffleInstrument {
    constructor()
    // private env: TruffleInstrument$Env;
    // private ignoreSources: IgnoreSources;
    // private keys: BitSet;
    // private keysUnchanged: Assumption;
    // private perContextData: ContextLocal<InsightPerContext>;
    closeKeys(noLongerNeededKeys: InsightInstrument$Key[]): void;
    collectGlobalSymbolsImpl(source: InsightPerSource, argNames: string[], args: Object[]): void;
    createInsightObject(source: InsightPerSource): AgentObject;
    env(): TruffleInstrument$Env;
    find(ctx: TruffleContext): InsightPerContext;
    findCtx(): InsightPerContext;
    getOptionDescriptors(): OptionDescriptor[];
    // private invalidateKeys(set: number, clear: number): void;
    keysLength(): number;
    keysUnchangedAssumption(): Assumption;
    newKey(type: AgentType): InsightInstrument$Key;
    onCreate(tmp: TruffleInstrument$Env): void;
    onDispose(tmp: TruffleInstrument$Env): void;
    option(): OptionKey<string>;
    registerAgentScript(src: () => Source): AutoCloseable;
}