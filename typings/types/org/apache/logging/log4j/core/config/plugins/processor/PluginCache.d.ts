import type { OutputStream } from '../../../../../../../../java/io/OutputStream.d.ts'
import type { URL } from '../../../../../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginEntry } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/PluginEntry.d.ts'
export class PluginCache extends Object {
    constructor()
    // private categories: { [key: string]: { [key: string]: PluginEntry } };
    getAllCategories(): { [key: string]: { [key: string]: PluginEntry } };
    getCategory(category: string): { [key: string]: PluginEntry };
    loadCacheFiles(resources: Enumeration<URL>): void;
    size(): number;
    writeCache(os: OutputStream): void;
}