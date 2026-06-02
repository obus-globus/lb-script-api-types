import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleVehicleControl$SprintSpeed extends ToggleableValueGroup {
    static INSTANCE: ModuleVehicleControl$SprintSpeed;
    readonly horizontalSpeed: number;
    readonly verticalSpeed: number;
}