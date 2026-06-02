import type { Object } from '../../../java/lang/Object.d.ts'
import type { Isolate } from '../../../org/graalvm/nativeimage/Isolate.d.ts'
import type { IsolateThread } from '../../../org/graalvm/nativeimage/IsolateThread.d.ts'
import type { Isolates$CreateIsolateParameters } from '../../../org/graalvm/nativeimage/Isolates$CreateIsolateParameters.d.ts'
export class Isolates extends Object {
    static attachCurrentThread(paramisolate: Isolate): IsolateThread;
    static createIsolate(paramparameters: Isolates$CreateIsolateParameters): IsolateThread;
    static detachThread(paramthread: IsolateThread): void;
    static getCurrentThread(paramisolate: Isolate): IsolateThread;
    static getIsolate(paramthread: IsolateThread): Isolate;
    static tearDownIsolate(paramthread: IsolateThread): void;
    private constructor()
}