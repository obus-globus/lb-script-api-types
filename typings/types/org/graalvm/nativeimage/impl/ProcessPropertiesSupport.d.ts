import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CEntryPointLiteral } from '../../../../org/graalvm/nativeimage/c/function/CEntryPointLiteral.d.ts'
import type { PointerBase } from '../../../../org/graalvm/word/PointerBase.d.ts'
export interface ProcessPropertiesSupport extends Object{
    destroy(processID: number): boolean;
    destroyForcibly(processID: number): boolean;
    exec(executable: Path[], args: string[]): void;
    exec(executable: Path[], args: string[], env: { [key: string]: string }): void;
    getArgumentVectorBlockSize(): number;
    getArgumentVectorProgramName(): string;
    getExecutableName(): string;
    getObjectFile(symbol: string): string;
    getObjectFile(symbol: CEntryPointLiteral<Object>): string;
    getObjectFile(symbolAddress: PointerBase): string;
    getProcessID(): number;
    getProcessID(process: Process): number;
    isAlive(processID: number): boolean;
    setArgumentVectorProgramName(name: string): boolean;
    setLocale(category: string, locale: string): string;
    waitForProcessExit(processID: number): number;
}