import type { PluginTraceElement } from '../../../../../io/ktor/util/debug/plugins/PluginTraceElement.d.ts'
import type { PluginsTrace$Key } from '../../../../../io/ktor/util/debug/plugins/PluginsTrace$Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../../../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
export class PluginsTrace extends AbstractCoroutineContextElement {
    static Key: PluginsTrace$Key;
    constructor(eventOrder?: PluginTraceElement[])
    readonly eventOrder: PluginTraceElement[];
    component1(): PluginTraceElement[];
    copy(eventOrder: PluginTraceElement[]): PluginsTrace;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}