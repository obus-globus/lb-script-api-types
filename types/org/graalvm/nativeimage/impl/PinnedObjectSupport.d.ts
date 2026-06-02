import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PinnedObject } from '../../../../org/graalvm/nativeimage/PinnedObject.d.ts'
export interface PinnedObjectSupport extends Object{
    create(object: Object): PinnedObject;
}