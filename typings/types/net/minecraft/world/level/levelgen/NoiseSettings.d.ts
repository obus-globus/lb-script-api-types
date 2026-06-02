import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
export class NoiseSettings extends Record {
    static CODEC: Codec<NoiseSettings>;
    static create(paramminY: number, paramheight: number, paramnoiseSizeHorizontal: number, paramnoiseSizeVertical: number): NoiseSettings;
    // private height: number;
    // private minY: number;
    // private noiseSizeHorizontal: number;
    // private noiseSizeVertical: number;
    clampToHeightAccessor(heightAccessor: LevelHeightAccessor): NoiseSettings;
    equals(o: Object | null): boolean;
    getCellHeight(): number;
    getCellWidth(): number;
    hashCode(): number;
    height(): number;
    minY(): number;
    noiseSizeHorizontal(): number;
    noiseSizeVertical(): number;
    toString(): string;
}