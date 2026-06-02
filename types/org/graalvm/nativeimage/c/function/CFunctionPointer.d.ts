import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CodePointer } from '../../../../../org/graalvm/nativeimage/c/function/CodePointer.d.ts'
import type { RelocatedPointer } from '../../../../../org/graalvm/nativeimage/c/function/RelocatedPointer.d.ts'
export interface CFunctionPointer extends Object, CodePointer, RelocatedPointer{
}