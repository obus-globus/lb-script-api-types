import type { Process } from '../../../java/lang/Process.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CEntryPointLiteral } from '../../../org/graalvm/nativeimage/c/function/CEntryPointLiteral.d.ts'
export class ProcessProperties extends Object {
    static destroy(paramprocessID: number): boolean;
    static destroyForcibly(paramprocessID: number): boolean;
    static exec(paramexecutable: Path[][], paramargs: (Object | null)[]): void;
    static exec(paramexecutable: Path[][], paramargs: (Object | null)[], paramenv: { [key: string]: string }): void;
    static getArgumentVectorBlockSize(): number;
    static getArgumentVectorProgramName(): string;
    static getExecutableName(): string;
    static getObjectFile(paramsymbol: string): string;
    static getObjectFile(paramsymbol: CEntryPointLiteral<Object>): string;
    static getProcessID(): number;
    static getProcessID(paramprocess: Process): number;
    static isAlive(paramprocessID: number): boolean;
    static setArgumentVectorProgramName(paramname: string): boolean;
    static setLocale(paramcategory: string, paramlocale: string): string;
    static waitForProcessExit(paramprocessID: number): number;
    private constructor()
}