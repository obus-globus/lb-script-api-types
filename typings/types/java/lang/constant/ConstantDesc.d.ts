import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConstantDesc extends Object{
    resolveConstantDesc(arg0: MethodHandles$Lookup): Object;
}