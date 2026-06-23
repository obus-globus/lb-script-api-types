import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractPackResources } from '../../../../net/minecraft/server/packs/AbstractPackResources.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { ResourceMetadata } from '../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export class PathPackResources extends AbstractPackResources {
    static METADATA_EXTENSION: string;
    static PACK_META: string;
    static getNamespaces(paramrootDir: Path[][]): string[];
    static getResource(paramtopDir: Path[][], paramlocation: Identifier): () => InputStream;
    static listPath(paramnamespace: string, paramtopDir: Path[][], paramdecomposedPrefixPath: string[], paramoutput: (param0: Object | null, param1: Object | null) => void): void;
    static listResources(paramtopPath: Path[][], paramnamespace: string, paramdirectory: string, paramoutput: (param0: Object | null, param1: Object | null) => void): void;
    static loadMetadata(parampackResources: PackResources): ResourceMetadata;
    static validatePath(parampath: Path[][]): boolean;
    constructor(location: PackLocationInfo, root: Path[])
    // private root: Path[];
    close(): void;
    getNamespaces(type: PackType): string[];
    getResource(type: PackType, location: Identifier): () => InputStream;
    getRootResource(path: string[]): () => InputStream;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Object | null, param1: Object | null) => void): void;
    // private topPackDir(type: PackType): Path[];
}