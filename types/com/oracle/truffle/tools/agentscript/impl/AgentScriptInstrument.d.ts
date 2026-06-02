import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { AgentObject } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AgentObject.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightPerSource } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightPerSource.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../../../../org/graalvm/options/OptionKey.d.ts'
export class AgentScriptInstrument extends InsightInstrument {
    constructor()
    // private agent: AgentObject;
    collectGlobalSymbolsImpl(src: InsightPerSource, argNames: string[], args: Object[]): void;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    option(): OptionKey<string>;
}