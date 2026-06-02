import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class WaypointStyle extends Record {
    static CODEC: Codec<WaypointStyle>;
    static DEFAULT_FAR_DISTANCE: number;
    static DEFAULT_NEAR_DISTANCE: number;
    static ICON_LOCATION_PREFIX: string;
    // private farDistance: number;
    // private nearDistance: number;
    // private spriteLocations: Identifier[];
    // private sprites: Identifier[];
    equals(o: Object | null): boolean;
    farDistance(): number;
    hashCode(): number;
    nearDistance(): number;
    sprite(distance: number): Identifier;
    spriteLocations(): Identifier[];
    sprites(): Identifier[];
    toString(): string;
    validate(): DataResult<WaypointStyle>;
}