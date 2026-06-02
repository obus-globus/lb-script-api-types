import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileProcessResult extends Object {
    constructor()
    exitValue: number;
    // private isTimeout: boolean;
    processTimeMillis: number;
    stderr: string;
    stderrLength: number;
    stderrTruncated: boolean;
    stdout: string;
    stdoutLength: number;
    stdoutTruncated: boolean;
    getExitValue(): number;
    getProcessTimeMillis(): number;
    getStderr(): string;
    getStderrLength(): number;
    getStdout(): string;
    getStdoutLength(): number;
    isStderrTruncated(): boolean;
    isStdoutTruncated(): boolean;
    isTimeout(): boolean;
    setExitValue(arg0: number): void;
    setProcessTimeMillis(arg0: number): void;
    setStderr(arg0: string): void;
    setStderrLength(arg0: number): void;
    setStderrTruncated(arg0: boolean): void;
    setStdout(arg0: string): void;
    setStdoutLength(arg0: number): void;
    setStdoutTruncated(arg0: boolean): void;
    setTimeout(arg0: boolean): void;
    toString(): string;
}