import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { CPUTracer$Payload } from '../../../../../com/oracle/truffle/tools/profiler/CPUTracer$Payload.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
export class CPUTracer extends Object implements Closeable {
    static find(paramengine: Engine): CPUTracer;
    constructor(env: TruffleInstrument$Env)
    // private activeBinding: EventBinding<Object>;
    // private closed: boolean;
    readonly collecting: boolean;
    // private env: TruffleInstrument$Env;
    readonly filter: SourceSectionFilter;
    // private payloadMap: Map<SourceSection, CPUTracer$Payload>;
    clearData(): void;
    close(): void;
    // private getCounter(context: EventContext): CPUTracer$Payload;
    getFilter(): SourceSectionFilter;
    getPayloads(): E[];
    isCollecting(): boolean;
    // private resetTracer(): void;
    setCollecting(collecting: boolean): void;
    setFilter(filter: SourceSectionFilter): void;
    // private verifyConfigAllowed(): void;
}