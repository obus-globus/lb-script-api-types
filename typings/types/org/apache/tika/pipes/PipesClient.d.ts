import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Process } from '../../../../java/lang/Process.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { FetchEmitTuple } from '../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { PipesConfigBase } from '../../../../org/apache/tika/pipes/PipesConfigBase.d.ts'
import type { PipesResult } from '../../../../org/apache/tika/pipes/PipesResult.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
import type { EmitKey } from '../../../../org/apache/tika/pipes/emitter/EmitKey.d.ts'
export class PipesClient extends Object implements Closeable {
    constructor(arg0: PipesConfigBase)
    // private closed: boolean;
    // private executorService: ExecutorService;
    // private executorServiceLock: Object[];
    readonly filesProcessed: number;
    // private input: DataInputStream;
    // private output: DataOutputStream;
    // private pipesClientId: number;
    // private pipesConfig: PipesConfigBase;
    // private process: Process;
    // private actuallyProcess(arg0: FetchEmitTuple): PipesResult;
    // private buildFatalResult(arg0: PipesResult, arg1: PipesResult[]): PipesResult;
    close(): void;
    // private deserializeEmitData(): PipesResult;
    // private deserializeIntermediateResult(arg0: EmitKey, arg1: ParseContext): PipesResult;
    // private destroyForcibly(): void;
    // private getCommandline(): string[];
    getFilesProcessed(): number;
    // private pauseThenDestroy(): void;
    // private ping(): boolean;
    process(arg0: FetchEmitTuple): PipesResult;
    // private readMessage(arg0: PipesResult$STATUS): PipesResult;
    // private readResults(arg0: FetchEmitTuple, arg1: number): PipesResult;
    // private restart(): void;
}