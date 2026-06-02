import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class ModuleVehicleControl$BaseSpeed extends ValueGroup {
    static INSTANCE: ModuleVehicleControl$BaseSpeed;
    readonly horizontalSpeed: number;
    readonly verticalSpeed: number;
}