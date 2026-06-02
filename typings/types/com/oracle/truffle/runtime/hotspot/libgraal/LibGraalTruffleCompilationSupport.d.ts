import type { TruffleCompilationSupport } from '../../../../../../com/oracle/truffle/compiler/TruffleCompilationSupport.d.ts'
import type { TruffleCompiler } from '../../../../../../com/oracle/truffle/compiler/TruffleCompiler.d.ts'
import type { TruffleCompilerOptionDescriptor } from '../../../../../../com/oracle/truffle/compiler/TruffleCompilerOptionDescriptor.d.ts'
import type { TruffleCompilerRuntime } from '../../../../../../com/oracle/truffle/compiler/TruffleCompilerRuntime.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class LibGraalTruffleCompilationSupport extends Object implements TruffleCompilationSupport {
    static initializeIsolate(paramisolateThreadId: number): void;
    constructor()
    // private cachedCompilerConfigurationName: string;
    compilerOptionExists(key: string): boolean;
    createCompiler(runtime: TruffleCompilerRuntime): TruffleCompiler;
    getCompilerConfigurationName(runtime: TruffleCompilerRuntime): string;
    getCompilerVersion(): string;
    getCompilerVersion(): string;
    isSuppressedCompilationFailure(throwable: Throwable): boolean;
    isSuppressedCompilationFailure(throwable: Throwable): boolean;
    listCompilerOptions(): TruffleCompilerOptionDescriptor[];
    openCompilerThreadScope(): AutoCloseable;
    openCompilerThreadScope(): AutoCloseable;
    registerRuntime(runtime: TruffleCompilerRuntime): void;
    validateCompilerOption(key: string, value: string): string;
}