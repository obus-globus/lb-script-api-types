import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Engine } from '../../../../ai/djl/engine/Engine.d.ts'
import type { BaseNDManager } from '../../../../ai/djl/ndarray/BaseNDManager.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { PtNDArray } from '../../../../ai/djl/pytorch/engine/PtNDArray.d.ts'
import type { Buffer } from '../../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export class PtNDManager extends BaseNDManager {
    static UID_GENERATOR: AtomicLong;
    static copyBuffer(paramarg0: Buffer, paramarg1: ByteBuffer): void;
    static validateBuffer(paramarg0: Buffer, paramarg1: DataType, paramarg2: number): void;
    private constructor(arg0: NDManager, arg1: Device)
    allocateDirect(arg0: number): ByteBuffer;
    arange(arg0: number, arg1: number, arg2: number, arg3: DataType): NDArray;
    arange(arg0: number, arg1: number, arg2: number, arg3: DataType): NDArray;
    create(arg0: Shape, arg1: DataType): PtNDArray;
    create(arg0: Buffer, arg1: Shape, arg2: DataType): PtNDArray;
    create(arg0: string[], arg1: Charset, arg2: Shape): NDArray;
    createCoo(arg0: Buffer, arg1: number[][], arg2: Shape): NDArray;
    eye(arg0: number, arg1: number, arg2: number, arg3: DataType): NDArray;
    from(arg0: NDArray): PtNDArray;
    full(arg0: Shape, arg1: number, arg2: DataType): NDArray;
    getEngine(): Engine;
    hanningWindow(arg0: number): NDArray;
    linspace(arg0: number, arg1: number, arg2: number, arg3: boolean): NDArray;
    newSubManager(arg0: Device): PtNDManager;
    ones(arg0: Shape, arg1: DataType): NDArray;
    randomInteger(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    randomNormal(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    randomPermutation(arg0: number): NDArray;
    randomUniform(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    zeros(arg0: Shape, arg1: DataType): NDArray;
}