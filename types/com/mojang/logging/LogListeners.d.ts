import type { LogListeners$Listener } from '../../../com/mojang/logging/LogListeners$Listener.d.ts'
import type { LogListeners$Target } from '../../../com/mojang/logging/LogListeners$Target.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LogListeners extends Object {
    static addListener(paramarg0: string, paramarg1: LogListeners$Listener): void;
    static getOrCreateTarget(paramarg0: string): LogListeners$Target;
    constructor()
}