import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { CPUSampler } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../../../../org/graalvm/polyglot/Engine.d.ts'
export class CPUSamplerInstrument extends TruffleInstrument {
    static ID: string;
    static getSampler(paramengine: Engine): CPUSampler;
    constructor()
    // private absoluteOutputPath: string;
    // private sampler: CPUSampler;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}