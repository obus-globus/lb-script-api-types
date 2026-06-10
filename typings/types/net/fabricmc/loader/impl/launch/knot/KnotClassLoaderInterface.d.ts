import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Manifest } from '../../../../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface KnotClassLoaderInterface extends Object{
    addCodeSource(arg0: Path[]): void;
    getClassLoader(): ClassLoader;
    getManifest(arg0: Path[]): Manifest;
    getPreMixinClassBytes(arg0: string): number[];
    getRawClassBytes(arg0: string): number[];
    initializeTransformers(): void;
    isClassLoaded(arg0: string): boolean;
    loadIntoTarget(arg0: string): Class<Object>;
    setAllowedPrefixes(arg0: Path[], arg1: string[]): void;
    setValidParentClassPath(arg0: Path[][]): void;
}