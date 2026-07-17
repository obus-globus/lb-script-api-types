import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { ProcessHandler } from '../../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
export interface PolyglotHostServices extends Object{
    attachPolyglotThread(contextReceiver: Object, isolateThread: number, enterContext: boolean, polyglotThreadId: number): void;
    detachPolyglotThread(contextReceiver: Object, leaveContext: boolean): void;
    getStackTrace(): Throwable;
    isDefaultProcessHandler(processHandler: ProcessHandler): boolean;
    isInCurrentEngineHostCallback(engineReceiver: Object): boolean;
    isInternalFileSystem(fileSystem: FileSystem): boolean;
    notifyPolyglotThreadStart(contextReceiver: Object, foreignThreadId: number): void;
    retrieveHostStackOverflowLimit(): number;
}