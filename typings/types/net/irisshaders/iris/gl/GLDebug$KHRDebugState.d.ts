import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GLDebug$DebugState } from '../../../../net/irisshaders/iris/gl/GLDebug$DebugState.d.ts'
export class GLDebug$KHRDebugState extends Object implements GLDebug$DebugState {
    private constructor()
    // private stack: string[];
    // private stackSize: number;
    nameObject(arg0: number, arg1: number, arg2: string): void;
    popGroup(): void;
    pushGroup(arg0: number, arg1: string): void;
}