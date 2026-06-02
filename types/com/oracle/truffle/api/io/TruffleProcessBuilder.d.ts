import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Process } from '../../../../../java/lang/Process.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { ProcessHandler$Redirect } from '../../../../../org/graalvm/polyglot/io/ProcessHandler$Redirect.d.ts'
export class TruffleProcessBuilder extends Object {
    constructor(polyglotLanguageContext: Object, fileSystem: FileSystem, command: string[])
    // private clearEnvironment: boolean;
    // private cmd: string[];
    // private cwd: TruffleFile;
    // private env: { [key: string]: string };
    // private errorRedirect: ProcessHandler$Redirect;
    // private fileSystem: FileSystem;
    // private inheritIO: boolean;
    // private inputRedirect: ProcessHandler$Redirect;
    // private outputRedirect: ProcessHandler$Redirect;
    // private polyglotLanguageContext: Object;
    // private redirectErrorStream: boolean;
    clearEnvironment(clear: boolean): TruffleProcessBuilder;
    command(command: string[]): TruffleProcessBuilder;
    command(command: string[]): TruffleProcessBuilder;
    createRedirectToStream(stream: OutputStream): ProcessHandler$Redirect;
    directory(currentWorkingDirectory: TruffleFile): TruffleProcessBuilder;
    environment(name: string, value: string): TruffleProcessBuilder;
    environment(environment: { [key: string]: string }): TruffleProcessBuilder;
    inheritIO(enabled: boolean): TruffleProcessBuilder;
    redirectError(destination: ProcessHandler$Redirect): TruffleProcessBuilder;
    redirectErrorStream(enabled: boolean): TruffleProcessBuilder;
    redirectInput(source: ProcessHandler$Redirect): TruffleProcessBuilder;
    redirectOutput(destination: ProcessHandler$Redirect): TruffleProcessBuilder;
    start(): Process;
    // private wrapHostException<T extends Throwable>(t: T): RuntimeException;
}