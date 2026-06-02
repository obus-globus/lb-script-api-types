import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { EnvironmentAttributeReader } from '../../../../../net/minecraft/world/attribute/EnvironmentAttributeReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class SpawnContext extends Record {
    static create(paramlevel: ServerLevelAccessor, parampos: BlockPos): SpawnContext;
    constructor(pos: BlockPos, level: ServerLevelAccessor, environmentAttributes: EnvironmentAttributeReader, biome: Holder<Biome>)
    // private biome: Holder<Biome>;
    // private environmentAttributes: EnvironmentAttributeReader;
    // private level: ServerLevelAccessor;
    // private pos: BlockPos;
    biome(): Holder<Biome>;
    environmentAttributes(): EnvironmentAttributeReader;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): ServerLevelAccessor;
    pos(): BlockPos;
    toString(): string;
}