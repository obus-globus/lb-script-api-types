import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Manifest } from '../../../../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../../net/fabricmc/api/EnvType.d.ts'
import type { GameProvider } from '../../../../../../net/fabricmc/loader/impl/game/GameProvider.d.ts'
import type { KnotClassDelegate$ClassLoaderAccess } from '../../../../../../net/fabricmc/loader/impl/launch/knot/KnotClassDelegate$ClassLoaderAccess.d.ts'
import type { KnotClassDelegate$Metadata } from '../../../../../../net/fabricmc/loader/impl/launch/knot/KnotClassDelegate$Metadata.d.ts'
import type { KnotClassLoaderInterface } from '../../../../../../net/fabricmc/loader/impl/launch/knot/KnotClassLoaderInterface.d.ts'
import type { IMixinTransformer } from '../../../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformer.d.ts'
export class KnotClassDelegate<T extends ClassLoader & KnotClassDelegate$ClassLoaderAccess> extends Object implements KnotClassLoaderInterface {
    static create(paramarg0: boolean, paramarg1: boolean, paramarg2: EnvType, paramarg3: GameProvider): KnotClassLoaderInterface;
    constructor(arg0: boolean, arg1: EnvType, arg2: T, arg3: ClassLoader, arg4: GameProvider)
    // private allowedPrefixes: Map<Path, string[]>;
    readonly classLoader: T;
    // private codeSources: Path[];
    // private envType: EnvType;
    // private isDevelopment: boolean;
    // private metadataCache: Map<Path, KnotClassDelegate$Metadata>;
    // private mixinTransformer: IMixinTransformer;
    // private parentClassLoader: ClassLoader;
    // private parentSourcedClasses: string[];
    // private provider: GameProvider;
    // private transformInitialized: boolean;
    // private validParentCodeSources: Path[];
    addCodeSource(arg0: Path): void;
    findLibrary(arg0: string): string;
    getClassLoader(): ClassLoader;
    getManifest(arg0: Path): Manifest;
    // private getMetadata(arg0: Path): KnotClassDelegate$Metadata;
    // private getMetadata(arg0: string): KnotClassDelegate$Metadata;
    // private getMixinTransformer(): IMixinTransformer;
    // private getPostMixinClassByteArray(arg0: string, arg1: boolean): number[];
    // private getPreMixinClassByteArray(arg0: string, arg1: boolean): number[];
    getPreMixinClassBytes(arg0: string): number[];
    // private getRawClassByteArray(arg0: string, arg1: boolean): number[];
    getRawClassBytes(arg0: string): number[];
    initializeTransformers(): void;
    isClassLoaded(arg0: string): boolean;
    // private isValidParentUrl(arg0: URL, arg1: string): boolean;
    loadClass(arg0: string, arg1: boolean): Class<Object>;
    loadIntoTarget(arg0: string): Class<Object>;
    setAllowedPrefixes(arg0: Path, ...arg1: string[]): void;
    setValidParentClassPath(arg0: Path[]): void;
    tryLoadClass(arg0: string, arg1: boolean): Class<Object>;
}