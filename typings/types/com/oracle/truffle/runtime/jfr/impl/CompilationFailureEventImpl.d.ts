import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
export class CompilationFailureEventImpl extends RootFunctionEventImpl {
    constructor(engineId: number, id: number, source: string, sourceHash: string, language: string, rootFunction: string, astSize: number)
    failureReason: string;
    permanentFailure: boolean;
    stackTrace: string;
    truffleTier: number;
    setFailureData(tier: number, permanent: boolean, reason: string, stackTrace: string): void;
}