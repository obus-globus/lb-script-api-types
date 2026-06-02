import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackResources } from '../../../../../../net/minecraft/server/packs/PackResources.d.ts'
export class ResourcePackScanner$ScannedResourcePack extends Record {
    private constructor(resourcePack: PackResources, shaderPrograms: string[], shaderIncludes: string[])
    // private resourcePack: PackResources;
    // private shaderIncludes: string[];
    // private shaderPrograms: string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    resourcePack(): PackResources;
    shaderIncludes(): string[];
    shaderPrograms(): string[];
    toString(): string;
}