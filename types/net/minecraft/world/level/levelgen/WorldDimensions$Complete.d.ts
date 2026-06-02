import type { Lifecycle } from '../../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryAccess$Frozen } from '../../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { LevelStem } from '../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { PrimaryLevelData$SpecialWorldProperty } from '../../../../../net/minecraft/world/level/storage/PrimaryLevelData$SpecialWorldProperty.d.ts'
export class WorldDimensions$Complete extends Record {
    constructor(dimensions: LevelStem[], specialWorldProperty: PrimaryLevelData$SpecialWorldProperty)
    // private dimensions: LevelStem[];
    // private specialWorldProperty: PrimaryLevelData$SpecialWorldProperty;
    dimensions(): LevelStem[];
    dimensionsRegistryAccess(): RegistryAccess$Frozen;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lifecycle(): Lifecycle;
    specialWorldProperty(): PrimaryLevelData$SpecialWorldProperty;
    toString(): string;
}