import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class HatsFlower$HatFlowerSettings extends ValueGroup {
    static INSTANCE: HatsFlower$HatFlowerSettings;
    readonly innerRadius: number;
    readonly outerRadius: number;
    readonly petalCount: number;
    readonly sharpness: number;
    readonly spinSpeed: number;
}