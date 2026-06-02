import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { WorldDimensions } from '../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
export class DedicatedServerProperties$WorldDimensionData extends Record {
    private constructor(generatorSettings: JsonObject, levelType: string)
    // private generatorSettings: JsonObject;
    // private levelType: string;
    create(registries: HolderLookup$Provider): WorldDimensions;
    equals(o: Object | null): boolean;
    generatorSettings(): JsonObject;
    hashCode(): number;
    levelType(): string;
    toString(): string;
}