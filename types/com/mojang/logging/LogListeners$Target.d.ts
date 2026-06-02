import type { LogListeners$Listener } from '../../../com/mojang/logging/LogListeners$Listener.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Layout } from '../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export class LogListeners$Target extends Object {
    constructor()
    // private listeners: LogListeners$Listener[];
    // private addListener(arg0: LogListeners$Listener): void;
    post(arg0: Layout<Serializable>, arg1: LogEvent): void;
}