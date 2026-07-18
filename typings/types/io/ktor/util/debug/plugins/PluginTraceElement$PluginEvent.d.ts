import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PluginTraceElement$PluginEvent extends Enum<PluginTraceElement$PluginEvent> {
    static FINISHED: PluginTraceElement$PluginEvent;
    static STARTED: PluginTraceElement$PluginEvent;
    static getEntries(): PluginTraceElement$PluginEvent[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): PluginTraceElement$PluginEvent;
    static values(): PluginTraceElement$PluginEvent[];
    private constructor()
    name(): "STARTED" | "FINISHED";
}