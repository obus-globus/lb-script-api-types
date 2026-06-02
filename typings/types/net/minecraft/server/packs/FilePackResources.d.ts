import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractPackResources } from '../../../../net/minecraft/server/packs/AbstractPackResources.d.ts'
import type { FilePackResources$SharedZipFileAccess } from '../../../../net/minecraft/server/packs/FilePackResources$SharedZipFileAccess.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { ResourceMetadata } from '../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export class FilePackResources extends AbstractPackResources {
    static METADATA_EXTENSION: string;
    static PACK_META: string;
    static extractNamespace(paramprefix: string, paramname: string): string;
    static loadMetadata(parampackResources: PackResources): ResourceMetadata;
    private constructor(location: PackLocationInfo, zipFileAccess: FilePackResources$SharedZipFileAccess, prefix: string)
    // private prefix: string;
    // private zipFileAccess: FilePackResources$SharedZipFileAccess;
    // private addPrefix(path: string): string;
    close(): void;
    getNamespaces(type: PackType): string[];
    // private getResource(path: string): () => InputStream;
    getResource(type: PackType, location: Identifier): () => InputStream;
    getRootResource(path: string[]): () => InputStream;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Object | null, param1: Object | null) => void): void;
}