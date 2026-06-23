import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginEntry } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/PluginEntry.d.ts'
export class PluginType<T extends unknown> extends Object {
    constructor(pluginEntry: PluginEntry, pluginClass: Class<T>, elementName: string)
    readonly elementName: string;
    readonly pluginClass: Class<T>;
    // private pluginEntry: PluginEntry;
    getCategory(): string;
    getElementName(): string;
    getKey(): string;
    getPluginClass(): Class<T>;
    isDeferChildren(): boolean;
    isObjectPrintable(): boolean;
    toString(): string;
}