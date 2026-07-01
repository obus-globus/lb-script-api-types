import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VibrationInfo } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationInfo.d.ts'
import type { VibrationSelector } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSelector.d.ts'
export class VibrationSystem$Data extends Object {
    static CODEC: Codec<VibrationSystem$Data>;
    static NBT_TAG_KEY: string;
    constructor()
    readonly currentVibration: VibrationInfo;
    readonly reloadVibrationParticle: boolean;
    readonly selectionStrategy: VibrationSelector;
    readonly travelTimeInTicks: number;
    decrementTravelTime(): void;
    getCurrentVibration(): VibrationInfo;
    getSelectionStrategy(): VibrationSelector;
    getTravelTimeInTicks(): number;
    setCurrentVibration(currentVibration: VibrationInfo): void;
    setReloadVibrationParticle(reloadVibrationParticle: boolean): void;
    setTravelTimeInTicks(travelTimeInTicks: number): void;
    shouldReloadVibrationParticle(): boolean;
}