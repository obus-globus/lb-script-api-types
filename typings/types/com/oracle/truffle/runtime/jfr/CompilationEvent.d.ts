import type { RootFunctionEvent } from '../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CompilationEvent extends RootFunctionEvent, Object {
    compilationStarted(): void;
    failed(tier: number, permanent: boolean, reason: string, lazyStackTrace: () => string): void;
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