import type { BytecodeDescriptor } from '../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { HistogramInstructionTracer } from '../../../../com/oracle/truffle/api/bytecode/debug/HistogramInstructionTracer.d.ts'
import type { PrintInstructionTracer } from '../../../../com/oracle/truffle/api/bytecode/debug/PrintInstructionTracer.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { PolyglotSharingLayer } from '../../../../com/oracle/truffle/polyglot/PolyglotSharingLayer.d.ts'
import type { ScheduledExecutorService } from '../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../org/graalvm/collections/Pair.d.ts'
export class PolyglotInstructionTracers extends Object {
    constructor(layer: PolyglotSharingLayer)
    // private histogramFactory: (param0: BytecodeDescriptor<any, any, any>) => HistogramInstructionTracer;
    // private intervalExecutor: ScheduledExecutorService;
    // private languageFilter: Pair<LanguageInfo[], LanguageInfo[]>;
    // private layer: PolyglotSharingLayer;
    // private methodFilter: Pair<string[], string[]>;
    // private tracingFactory: (param0: BytecodeDescriptor<any, any, any>) => PrintInstructionTracer;
    // private dumpAndReset(): void;
    onLayerClose(): void;
}