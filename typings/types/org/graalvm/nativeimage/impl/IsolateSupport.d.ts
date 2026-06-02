import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Isolate } from '../../../../org/graalvm/nativeimage/Isolate.d.ts'
import type { IsolateThread } from '../../../../org/graalvm/nativeimage/IsolateThread.d.ts'
import type { Isolates$CreateIsolateParameters } from '../../../../org/graalvm/nativeimage/Isolates$CreateIsolateParameters.d.ts'
export interface IsolateSupport extends Object{
    attachCurrentThread(isolate: Isolate): IsolateThread;
    createIsolate(parameters: Isolates$CreateIsolateParameters): IsolateThread;
    detachThread(thread: IsolateThread): void;
    getCurrentThread(isolate: Isolate): IsolateThread;
    getIsolate(thread: IsolateThread): Isolate;
    tearDownIsolate(thread: IsolateThread): void;
}