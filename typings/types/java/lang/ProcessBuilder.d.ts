import type { File } from '../../java/io/File.d.ts'
import type { Process } from '../../java/lang/Process.d.ts'
import type { ProcessBuilder$Redirect } from '../../java/lang/ProcessBuilder$Redirect.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ProcessBuilder extends Object {
    static startPipeline(paramarg0: ProcessBuilder[]): Process[];
    constructor(...arg0: string[])
    constructor(arg0: string[])
    // private command: string[];
    // private directory: File;
    // private environment: { [key: string]: string };
    // private redirectErrorStream: boolean;
    // private redirects: ProcessBuilder$Redirect[];
    command(): string[];
    command(...arg0: string[]): ProcessBuilder;
    command(arg0: string[]): ProcessBuilder;
    directory(): File;
    directory(arg0: File): ProcessBuilder;
    environment(): { [key: string]: string };
    environment(arg0: string[]): ProcessBuilder;
    inheritIO(): ProcessBuilder;
    redirectError(): ProcessBuilder$Redirect;
    redirectError(arg0: File): ProcessBuilder;
    redirectError(arg0: ProcessBuilder$Redirect): ProcessBuilder;
    redirectErrorStream(): boolean;
    redirectErrorStream(arg0: boolean): ProcessBuilder;
    redirectInput(): ProcessBuilder$Redirect;
    redirectInput(arg0: File): ProcessBuilder;
    redirectInput(arg0: ProcessBuilder$Redirect): ProcessBuilder;
    redirectOutput(): ProcessBuilder$Redirect;
    redirectOutput(arg0: File): ProcessBuilder;
    redirectOutput(arg0: ProcessBuilder$Redirect): ProcessBuilder;
    // private redirects(): ProcessBuilder$Redirect[];
    start(): Process;
    // private start(arg0: ProcessBuilder$Redirect[]): Process;
}