import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObjectHandles } from '../../../../org/graalvm/nativeimage/ObjectHandles.d.ts'
export interface ObjectHandlesSupport extends Object{
    createHandles(): ObjectHandles;
    getGlobalHandles(): ObjectHandles;
}