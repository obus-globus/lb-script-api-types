import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class WaterSpeed$BaseSpeed extends ValueGroup {
    static INSTANCE: WaterSpeed$BaseSpeed;
    readonly horizontalSpeed: number;
    readonly verticalSpeed: number;
}