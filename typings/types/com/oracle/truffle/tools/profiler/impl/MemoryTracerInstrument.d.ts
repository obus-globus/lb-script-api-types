import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { MemoryTracer } from '../../../../../../com/oracle/truffle/tools/profiler/MemoryTracer.d.ts'
import type { ProfilerToolFactory } from '../../../../../../com/oracle/truffle/tools/profiler/impl/ProfilerToolFactory.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../../../../org/graalvm/polyglot/Engine.d.ts'
export class MemoryTracerInstrument extends TruffleInstrument {
    static ID: string;
    static getTracer(paramengine: Engine): MemoryTracer;
    static setFactory(paramfactory: ProfilerToolFactory<MemoryTracer>): void;
    constructor()
    // private tracer: MemoryTracer;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}