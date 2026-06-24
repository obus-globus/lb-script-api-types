import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VibrationInfo } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationInfo.d.ts'
export class VibrationSelector$VibrationEvent extends Record {
    private constructor(event: VibrationInfo, tick: number)
    // private event: VibrationInfo;
    // private tick: number;
    equals(o: Object | null): boolean;
    event(): VibrationInfo;
    hashCode(): number;
    tick(): number;
    toString(): string;
}