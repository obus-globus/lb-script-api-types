import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { CPUTracer } from '../../../../../../com/oracle/truffle/tools/profiler/CPUTracer.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../../../../org/graalvm/polyglot/Engine.d.ts'
export class CPUTracerInstrument extends TruffleInstrument {
    static ID: string;
    static getTracer(paramengine: Engine): CPUTracer;
    constructor()
    // private absoluteOutputPath: string;
    // private enabled: boolean;
    // private tracer: CPUTracer;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}