import type { Object } from '../../../java/lang/Object.d.ts'
import type { Isolate } from '../../../org/graalvm/nativeimage/Isolate.d.ts'
import type { IsolateThread } from '../../../org/graalvm/nativeimage/IsolateThread.d.ts'
export class CurrentIsolate extends Object {
    static getCurrentThread(): IsolateThread;
    static getIsolate(): Isolate;
    private constructor()
}