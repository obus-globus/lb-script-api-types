import type { ClassLoader } from '../../../../../../../../java/lang/ClassLoader.d.ts'
import type { AtomicReference } from '../../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class PluginRegistry extends Object {
    static getInstance(): PluginRegistry;
    private constructor()
    readonly pluginsByCategoryByBundleId: { [key: number]: { [key: string]: PluginType<Object>[] } };
    // private pluginsByCategoryByPackage: { [key: string]: { [key: string]: PluginType<Object>[] } };
    // private pluginsByCategoryRef: AtomicReference<{ [key: string]: PluginType<Object>[] }>;
    clear(): void;
    clearBundlePlugins(bundleId: number): void;
    // private decodeCacheFiles(loader: ClassLoader): { [key: string]: PluginType<Object>[] };
    getPluginsByCategoryByBundleId(): { [key: number]: { [key: string]: PluginType<Object>[] } };
    loadFromBundle(bundleId: number, loader: ClassLoader): { [key: string]: PluginType<Object>[] };
    loadFromMainClassLoader(): { [key: string]: PluginType<Object>[] };
    loadFromPackage(pkg: string): { [key: string]: PluginType<Object>[] };
}