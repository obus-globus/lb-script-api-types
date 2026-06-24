import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VibrationInfo } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationInfo.d.ts'
import type { VibrationSelector$VibrationEvent } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSelector$VibrationEvent.d.ts'
export class VibrationSelector extends Object {
    static CODEC: Codec<VibrationSelector>;
    constructor()
    constructor(currentVibration: Optional<VibrationInfo>, tick: number)
    // private currentVibrationData: Optional<VibrationSelector$VibrationEvent>;
    addCandidate(newVibration: VibrationInfo, tickTime: number): void;
    chosenCandidate(time: number): Optional<VibrationInfo>;
    // private shouldReplaceVibration(newVibration: VibrationInfo, tickTime: number): boolean;
    startOver(): void;
}