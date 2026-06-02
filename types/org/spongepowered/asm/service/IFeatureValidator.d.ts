import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMixinInfo } from '../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ClassInfo } from '../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
export interface IFeatureValidator extends Object{
    validateEnumExtension(arg0: IMixinInfo, arg1: ClassInfo): void;
}