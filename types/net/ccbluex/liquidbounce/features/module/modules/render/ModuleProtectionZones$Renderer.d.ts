import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class ModuleProtectionZones$Renderer extends ValueGroup {
    static INSTANCE: ModuleProtectionZones$Renderer;
    readonly holdBlockToRender: boolean;
    readonly renderLimit: number;
}