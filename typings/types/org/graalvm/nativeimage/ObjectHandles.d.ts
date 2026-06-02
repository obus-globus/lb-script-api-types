import type { Object } from '../../../java/lang/Object.d.ts'
import type { ObjectHandle } from '../../../org/graalvm/nativeimage/ObjectHandle.d.ts'
export interface ObjectHandles extends Object{
    create(object: Object): ObjectHandle;
    destroy(handle: ObjectHandle): void;
    get<T extends Object | number | string | boolean>(handle: ObjectHandle): T;
}