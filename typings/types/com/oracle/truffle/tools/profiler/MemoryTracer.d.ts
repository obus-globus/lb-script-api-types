import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { MemoryTracer$Payload } from '../../../../../com/oracle/truffle/tools/profiler/MemoryTracer$Payload.d.ts'
import type { ProfilerNode } from '../../../../../com/oracle/truffle/tools/profiler/ProfilerNode.d.ts'
import type { ShadowStack } from '../../../../../com/oracle/truffle/tools/profiler/ShadowStack.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
export class MemoryTracer extends Object implements Closeable {
    static find(paramengine: Engine): MemoryTracer;
    constructor(env: TruffleInstrument$Env)
    // private activeBinding: EventBinding<Object>;
    // private closed: boolean;
    readonly collecting: boolean;
    // private copyPayload: (param0: MemoryTracer$Payload) => MemoryTracer$Payload;
    // private env: TruffleInstrument$Env;
    readonly filter: SourceSectionFilter;
    // private mergePayload: (param0: MemoryTracer$Payload, param1: MemoryTracer$Payload) => void;
    // private payloadFactory: () => MemoryTracer$Payload;
    readonly rootNodes: Map<Thread, ProfilerNode<MemoryTracer$Payload>>;
    // private shadowStack: ShadowStack;
    readonly stackLimit: number;
    // private stackOverflowed: boolean;
    // private stacksBinding: EventBinding<Object>;
    clearData(): void;
    close(): void;
    getRootNodes(): ProfilerNode<MemoryTracer$Payload>[];
    getStackLimit(): number;
    getThreadToNodesMap(): Map<Thread, ProfilerNode<MemoryTracer$Payload>[]>;
    hasData(): boolean;
    hasStackOverflowed(): boolean;
    isCollecting(): boolean;
    resetTracer(): void;
    setCollecting(collecting: boolean): void;
    setFilter(filter: SourceSectionFilter): void;
    setStackLimit(stackLimit: number): void;
    // private verifyConfigAllowed(): void;
}