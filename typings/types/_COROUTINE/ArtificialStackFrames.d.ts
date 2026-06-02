import type { StackTraceElement } from '../java/lang/StackTraceElement.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class ArtificialStackFrames extends Object {
    constructor()
    coroutineBoundary(): StackTraceElement;
    coroutineCreation(): StackTraceElement;
}