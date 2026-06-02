import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MappingConfiguration$MappingSource } from '../../../../../net/fabricmc/loader/impl/launch/MappingConfiguration$MappingSource.d.ts'
import type { MappingTree } from '../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MappingTree.d.ts'
import type { MemoryMappingTree } from '../../../../../net/fabricmc/loader/impl/lib/mappingio/tree/MemoryMappingTree.d.ts'
export class MappingConfiguration extends Object {
    static CLIENT_OFFICIAL_NAMESPACE: string;
    static INTERMEDIARY_NAMESPACE: string;
    static NAMED_NAMESPACE: string;
    static OFFICIAL_NAMESPACE: string;
    static SERVER_OFFICIAL_NAMESPACE: string;
    constructor()
    readonly gameId: string;
    readonly gameVersion: string;
    // private initializedMappings: boolean;
    // private initializedMetadata: boolean;
    readonly mappingName: string;
    // private mappingSource: MappingConfiguration$MappingSource;
    readonly mappings: MemoryMappingTree;
    // private namespace: string;
    readonly namespaces: string[];
    // private computeRuntimeNamespace(): string;
    getDefaultModDistributionNamespace(): string;
    getGameId(): string;
    getGameVersion(): string;
    getMappingName(): string;
    // private getMappingSource(): MappingConfiguration$MappingSource;
    getMappings(): MappingTree;
    getNamespaces(): string[];
    getRuntimeNamespace(): string;
    hasAnyMappings(): boolean;
    // private initializeMappings(arg0: boolean): void;
    matches(arg0: string, arg1: string): boolean;
    requiresPackageAccessHack(): boolean;
}