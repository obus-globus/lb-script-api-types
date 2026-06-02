import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Hook$HookFunction extends Object{
    apply<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: T): T;
}