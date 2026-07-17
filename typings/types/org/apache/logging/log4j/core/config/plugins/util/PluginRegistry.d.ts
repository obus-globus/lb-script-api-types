import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { ClassLoader } from '../../../../../../../../java/lang/ClassLoader.d.ts'
import type { AtomicReference } from '../../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class PluginRegistry extends Object {
    static getInstance(): PluginRegistry;
    private constructor()
    readonly pluginsByCategoryByBundleId: JavaMap<number, JavaMap<string, PluginType<Object>[]>>;
    // private pluginsByCategoryByPackage: JavaMap<string, JavaMap<string, PluginType<Object>[]>>;
    // private pluginsByCategoryRef: AtomicReference<JavaMap<string, PluginType<Object>[]>>;
    clear(): void;
    clearBundlePlugins(bundleId: number): void;
    // private decodeCacheFiles(loader: ClassLoader): JavaMap<string, PluginType<Object>[]>;
    getPluginsByCategoryByBundleId(): JavaMap<number, JavaMap<string, PluginType<Object>[]>>;
    loadFromBundle(bundleId: number, loader: ClassLoader): JavaMap<string, PluginType<Object>[]>;
    loadFromMainClassLoader(): JavaMap<string, PluginType<Object>[]>;
    loadFromPackage(pkg: string): JavaMap<string, PluginType<Object>[]>;
}