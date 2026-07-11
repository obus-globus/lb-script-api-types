import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { VanillaPackResources } from '../../../../net/minecraft/server/packs/VanillaPackResources.d.ts'
import type { ResourceMetadata } from '../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export class VanillaPackResourcesBuilder extends Object {
    static developmentConfig: (param0: VanillaPackResourcesBuilder) => void;
    constructor()
    // private metadata: ResourceMetadata;
    // private namespaces: string[];
    // private pathsForType: { [key in PackType]: Path[][] };
    // private rootPaths: Path[][];
    applyDevelopmentConfig(): VanillaPackResourcesBuilder;
    build(location: PackLocationInfo): VanillaPackResources;
    exposeNamespace(...namespaces: string[]): VanillaPackResourcesBuilder;
    pushAssetPath(packType: PackType, path: Path[]): VanillaPackResourcesBuilder;
    pushClasspathResources(packType: PackType, source: Class<Object>): VanillaPackResourcesBuilder;
    pushJarResources(): VanillaPackResourcesBuilder;
    // private pushPathForType(packType: PackType, path: Path[]): void;
    // private pushRootPath(path: Path[]): void;
    pushUniversalPath(path: Path[]): VanillaPackResourcesBuilder;
    setMetadata(metadata: ResourceMetadata): VanillaPackResourcesBuilder;
    // private validateDirPath(path: Path[]): boolean;
}