import type { PluginName$Key } from '../../../../../io/ktor/util/debug/plugins/PluginName$Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../../../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
export class PluginName extends AbstractCoroutineContextElement {
    static Key: PluginName$Key;
    constructor(pluginName: string)
    readonly pluginName: string;
    component1(): string;
    copy(pluginName: string): PluginName;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}