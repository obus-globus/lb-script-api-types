import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IInjectionPointContext } from '../../../../../../org/spongepowered/asm/mixin/injection/IInjectionPointContext.d.ts'
import type { MethodSlice } from '../../../../../../org/spongepowered/asm/mixin/injection/code/MethodSlice.d.ts'
export interface ISliceContext extends Object, IInjectionPointContext{
    getSlice(arg0: string): MethodSlice;
}