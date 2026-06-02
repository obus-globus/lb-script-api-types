import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Version extends Object {
    static identify(): { [key: string]: Version };
    static identify(paramarg0: ClassLoader): { [key: string]: Version };
    static main(paramarg0: (Object | null)[]): void;
    private constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string, arg5: string, arg6: string)
    // private artifactId: string;
    // private artifactVersion: string;
    // private buildTimeMillis: number;
    // private commitTimeMillis: number;
    // private longCommitHash: string;
    // private repositoryStatus: string;
    // private shortCommitHash: string;
    artifactId(): string;
    artifactVersion(): string;
    buildTimeMillis(): number;
    commitTimeMillis(): number;
    longCommitHash(): string;
    repositoryStatus(): string;
    shortCommitHash(): string;
    toString(): string;
}