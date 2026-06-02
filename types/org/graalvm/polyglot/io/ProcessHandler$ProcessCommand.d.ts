import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessHandler$Redirect } from '../../../../org/graalvm/polyglot/io/ProcessHandler$Redirect.d.ts'
export class ProcessHandler$ProcessCommand extends Object {
    static create(paramcmd: string[], paramcwd: string, paramenvironment: { [key: string]: string }, paramredirectErrorStream: boolean, paraminputRedirect: ProcessHandler$Redirect, paramoutputRedirect: ProcessHandler$Redirect, paramerrorRedirect: ProcessHandler$Redirect): ProcessHandler$ProcessCommand;
    constructor(command: string[], cwd: string, environment: { [key: string]: string }, redirectErrorStream: boolean, inputRedirect: ProcessHandler$Redirect, outputRedirect: ProcessHandler$Redirect, errorRedirect: ProcessHandler$Redirect)
    // private cmd: string[];
    // private cwd: string;
    readonly environment: { [key: string]: string };
    readonly errorRedirect: ProcessHandler$Redirect;
    readonly inputRedirect: ProcessHandler$Redirect;
    readonly outputRedirect: ProcessHandler$Redirect;
    readonly redirectErrorStream: boolean;
    getCommand(): string[];
    getDirectory(): string;
    getEnvironment(): { [key: string]: string };
    getErrorRedirect(): ProcessHandler$Redirect;
    getInputRedirect(): ProcessHandler$Redirect;
    getOutputRedirect(): ProcessHandler$Redirect;
    isRedirectErrorStream(): boolean;
}