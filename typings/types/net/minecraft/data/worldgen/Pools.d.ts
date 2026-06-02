import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { StructureTemplatePool } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
export class Pools extends Object {
    static EMPTY: ResourceKey<StructureTemplatePool>;
    static bootstrap(paramcontext: BootstrapContext<StructureTemplatePool>): void;
    static createKey(paramname: string): ResourceKey<StructureTemplatePool>;
    static createKey(paramlocation: Identifier): ResourceKey<StructureTemplatePool>;
    static parseKey(paramname: string): ResourceKey<StructureTemplatePool>;
    static register(paramcontext: BootstrapContext<StructureTemplatePool>, paramname: string, parampool: StructureTemplatePool): void;
    constructor()
}