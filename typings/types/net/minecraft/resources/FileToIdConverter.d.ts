import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FileToIdConverterAccessor } from '../../../net/fabricmc/fabric/mixin/loot/FileToIdConverterAccessor.d.ts'
import type { FileToIdConverterAccessor as FileToIdConverterAccessor_2 } from '../../../net/fabricmc/fabric/mixin/resource/conditions/FileToIdConverterAccessor.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Resource } from '../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class FileToIdConverter extends Record implements FileToIdConverterAccessor, FileToIdConverterAccessor_2 {
    static json(paramprefix: string): FileToIdConverter;
    static registry(paramregistry: ResourceKey<Object>): FileToIdConverter;
    constructor(prefix: string, extension: string)
    // private extension: string;
    equals(o: Object | null): boolean;
    extension(): string;
    extensionMatches(id: Identifier): boolean;
    fileToId(file: Identifier): Identifier;
    hashCode(): number;
    idToFile(id: Identifier): Identifier;
    listMatchingResourceStacks(manager: ResourceManager): Map<Identifier, Resource[]>;
    listMatchingResources(manager: ResourceManager): Map<Identifier, Resource>;
    prefix(): string;
    toString(): string;
}