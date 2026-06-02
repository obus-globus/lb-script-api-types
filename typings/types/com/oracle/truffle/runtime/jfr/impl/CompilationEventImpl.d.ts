import type { CompilationEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/CompilationEvent.d.ts'
import type { CompilationFailureEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/CompilationFailureEventImpl.d.ts'
import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
export class CompilationEventImpl extends RootFunctionEventImpl implements CompilationEvent {
    constructor()
    compilationId: string;
    compiledCodeAddress: number;
    compiledCodeSize: number;
    dispatchedCalls: number;
    // private failure: CompilationFailureEventImpl;
    graalNodeCount: number;
    inlinedCalls: number;
    peNodeCount: number;
    peTime: number;
    success: boolean;
    truffleTier: number;
    compilationStarted(): void;
    failed(tier: number, permanent: boolean, reason: string, lazyStackTrace: () => string): void;
    publish(): void;
    setCompilationId(id: string): void;
    setCompiledCodeAddress(addr: number): void;
    setCompiledCodeSize(size: number): void;
    setDispatchedCalls(count: number): void;
    setGraalNodeCount(count: number): void;
    setInlinedCalls(count: number): void;
    setPartialEvaluationNodeCount(count: number): void;
    setPartialEvaluationTime(time: number): void;
    succeeded(tier: number): void;
}