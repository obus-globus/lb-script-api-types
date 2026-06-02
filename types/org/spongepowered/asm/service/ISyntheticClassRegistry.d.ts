import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ISyntheticClassInfo } from '../../../../org/spongepowered/asm/service/ISyntheticClassInfo.d.ts'
export interface ISyntheticClassRegistry extends Object{
    findSyntheticClass(arg0: string): ISyntheticClassInfo;
}