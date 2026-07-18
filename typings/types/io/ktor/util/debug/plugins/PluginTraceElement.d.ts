import type { PluginTraceElement$PluginEvent } from '../../../../../io/ktor/util/debug/plugins/PluginTraceElement$PluginEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PluginTraceElement extends Object {
    constructor(pluginName: string, handler: string, event: PluginTraceElement$PluginEvent)
    readonly event: PluginTraceElement$PluginEvent;
    readonly handler: string;
    readonly pluginName: string;
    component1(): string;
    component2(): string;
    component3(): PluginTraceElement$PluginEvent;
    copy(pluginName: string, handler: string, event: PluginTraceElement$PluginEvent): PluginTraceElement;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}