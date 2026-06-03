import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDArrayAdapter } from '../../../../ai/djl/ndarray/NDArrayAdapter.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PassthroughNDArray extends NDArrayAdapter {
    constructor(arg0: NDManager, arg1: Object)
    constructor(arg0: NDManager, arg1: Object, arg2: Shape, arg3: DataType)
    constructor(arg0: Object)
    readonly object: Object;
    detach(): void;
    getObject(): Object;
    intern(arg0: NDArray): void;
    toByteBuffer(): ByteBuffer;
    toByteBuffer(arg0: boolean): ByteBuffer;
}