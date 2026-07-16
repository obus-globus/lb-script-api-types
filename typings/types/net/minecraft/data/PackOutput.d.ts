import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PackOutput$PathProvider } from '../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { PackOutput$Target } from '../../../net/minecraft/data/PackOutput$Target.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class PackOutput extends Object {
    constructor(outputFolder: Path)
    readonly outputFolder: Path;
    createPathProvider(target: PackOutput$Target, kind: string): PackOutput$PathProvider;
    createRegistryComponentPathProvider(registryKey: ResourceKey<(Object | null)[]>): PackOutput$PathProvider;
    createRegistryElementsPathProvider(registryKey: ResourceKey<(Object | null)[]>): PackOutput$PathProvider;
    createRegistryTagsPathProvider(registryKey: ResourceKey<(Object | null)[]>): PackOutput$PathProvider;
    getOutputFolder(): Path;
    getOutputFolder(target: PackOutput$Target): Path;
}