import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { HeapMonitor } from '../../../../../../com/oracle/truffle/tools/profiler/HeapMonitor.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { Engine } from '../../../../../../org/graalvm/polyglot/Engine.d.ts'
export class HeapMonitorInstrument extends TruffleInstrument {
    static ID: string;
    static getMonitor(paramengine: Engine): HeapMonitor;
    constructor()
    // private monitor: HeapMonitor;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
}