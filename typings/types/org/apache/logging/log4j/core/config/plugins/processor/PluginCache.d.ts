import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { OutputStream } from '../../../../../../../../java/io/OutputStream.d.ts'
import type { URL } from '../../../../../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginEntry } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/processor/PluginEntry.d.ts'
export class PluginCache extends Object {
    constructor()
    // private categories: JavaMap<string, JavaMap<string, PluginEntry>>;
    getAllCategories(): JavaMap<string, JavaMap<string, PluginEntry>>;
    getCategory(category: string): JavaMap<string, PluginEntry>;
    loadCacheFiles(resources: Enumeration<URL>): void;
    size(): number;
    writeCache(os: OutputStream): void;
}