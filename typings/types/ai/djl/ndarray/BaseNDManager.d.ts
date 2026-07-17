import type { Device } from '../../../ai/djl/Device.d.ts'
import type { Engine } from '../../../ai/djl/engine/Engine.d.ts'
import type { BaseNDManager$TempResource } from '../../../ai/djl/ndarray/BaseNDManager$TempResource.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { NDResource } from '../../../ai/djl/ndarray/NDResource.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Buffer } from '../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export abstract class BaseNDManager extends Object implements NDManager {
    static UID_GENERATOR: AtomicLong;
    static copyBuffer(paramarg0: Buffer, paramarg1: ByteBuffer): void;
    static validateBuffer(paramarg0: Buffer, paramarg1: DataType, paramarg2: number): void;
    constructor(arg0: NDManager, arg1: Device)
    // private alternativeManager: NDManager;
    // private capped: AtomicBoolean;
    // private closed: AtomicBoolean;
    device: Device;
    name: string;
    // private parent: NDManager;
    // private resources: { [key: string]: AutoCloseable };
    // private tempResources: { [key: string]: BaseNDManager$TempResource };
    // private uid: string;
    allocateDirect(arg0: number): ByteBuffer;
    arange(arg0: number): NDArray;
    arange(arg0: number, arg1: number): NDArray;
    arange(arg0: number, arg1: number, arg2: number): NDArray;
    arange(arg0: number, arg1: number, arg2: number, arg3: DataType): NDArray;
    arange(arg0: number, arg1: number, arg2: number, arg3: DataType, arg4: Device): NDArray;
    attachAll(...arg0: NDResource[]): void;
    attachInternal(arg0: string, ...arg1: AutoCloseable[]): void;
    attachUncappedInternal(arg0: string, arg1: AutoCloseable): void;
    cap(): void;
    close(): void;
    create(arg0: Shape): NDArray;
    create(arg0: Shape, arg1: DataType): NDArray;
    create(arg0: Shape, arg1: DataType, arg2: Device): NDArray;
    create(arg0: Buffer, arg1: Shape): NDArray;
    create(arg0: Buffer, arg1: Shape, arg2: DataType): NDArray;
    create(arg0: boolean[][]): NDArray;
    create(arg0: number[][]): NDArray;
    create(arg0: string[]): NDArray;
    create(arg0: string[], arg1: Shape): NDArray;
    create(arg0: string[], arg1: Charset): NDArray;
    create(arg0: string[], arg1: Charset, arg2: Shape): NDArray;
    create(arg0: boolean): NDArray;
    create(arg0: boolean[]): NDArray;
    create(arg0: boolean[], arg1: Shape): NDArray;
    create(arg0: number): NDArray;
    create(arg0: number[]): NDArray;
    create(arg0: number[], arg1: Shape): NDArray;
    create(arg0: Number): NDArray;
    create(arg0: string): NDArray;
    createCSR(arg0: Buffer, arg1: number[], arg2: number[], arg3: Shape): NDArray;
    createCSR(arg0: Buffer, arg1: number[], arg2: number[], arg3: Shape, arg4: Device): NDArray;
    createCSR(arg0: number[], arg1: number[], arg2: number[], arg3: Shape, arg4: Device): NDArray;
    createCoo(arg0: Buffer, arg1: number[][], arg2: Shape): NDArray;
    createRowSparse(arg0: Buffer, arg1: Shape, arg2: number[], arg3: Shape): NDArray;
    createRowSparse(arg0: Buffer, arg1: Shape, arg2: number[], arg3: Shape, arg4: Device): NDArray;
    debugDump(arg0: number): void;
    decode(arg0: InputStream): NDArray;
    decode(arg0: number[]): NDArray;
    defaultDevice(): Device;
    detachInternal(arg0: string): void;
    eye(arg0: number): NDArray;
    eye(arg0: number, arg1: number): NDArray;
    eye(arg0: number, arg1: number, arg2: number): NDArray;
    eye(arg0: number, arg1: number, arg2: number, arg3: DataType): NDArray;
    eye(arg0: number, arg1: number, arg2: number, arg3: DataType, arg4: Device): NDArray;
    from(arg0: NDArray): NDArray;
    full(arg0: Shape, arg1: number): NDArray;
    full(arg0: Shape, arg1: number, arg2: DataType): NDArray;
    full(arg0: Shape, arg1: number, arg2: DataType, arg3: Device): NDArray;
    getAlternativeManager(): NDManager;
    getDevice(): Device;
    getEngine(): Engine;
    getManagedArrays(): NDArray[];
    getName(): string;
    getParentManager(): NDManager;
    hanningWindow(arg0: number): NDArray;
    invoke(arg0: string, arg1: (Object | null)[], arg2: Pair<string, Object>[]): (Object | null)[];
    invoke(arg0: string, arg1: NDArray[], arg2: NDArray[], arg3: Pair<string, Object>[]): void;
    isOpen(): boolean;
    linspace(arg0: number, arg1: number, arg2: number): NDArray;
    linspace(arg0: number, arg1: number, arg2: number, arg3: boolean): NDArray;
    linspace(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: Device): NDArray;
    load(arg0: Path): (Object | null)[];
    load(arg0: Path, arg1: Device): (Object | null)[];
    newSubManager(): NDManager;
    newSubManager(arg0: Device): NDManager;
    ones(arg0: Shape): NDArray;
    ones(arg0: Shape, arg1: DataType): NDArray;
    ones(arg0: Shape, arg1: DataType, arg2: Device): NDArray;
    randomInteger(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    randomMultinomial(arg0: number, arg1: NDArray): NDArray;
    randomMultinomial(arg0: number, arg1: NDArray, arg2: Shape): NDArray;
    randomNormal(arg0: Shape): NDArray;
    randomNormal(arg0: Shape, arg1: DataType): NDArray;
    randomNormal(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    randomNormal(arg0: number, arg1: number, arg2: Shape, arg3: DataType, arg4: Device): NDArray;
    randomPermutation(arg0: number): NDArray;
    randomUniform(arg0: number, arg1: number, arg2: Shape): NDArray;
    randomUniform(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    randomUniform(arg0: number, arg1: number, arg2: Shape, arg3: DataType, arg4: Device): NDArray;
    ret<T extends NDResource>(arg0: T): T;
    sampleGamma(arg0: NDArray, arg1: NDArray): NDArray;
    sampleGamma(arg0: NDArray, arg1: NDArray, arg2: Shape): NDArray;
    sampleNormal(arg0: NDArray, arg1: NDArray): NDArray;
    sampleNormal(arg0: NDArray, arg1: NDArray, arg2: Shape): NDArray;
    samplePoisson(arg0: NDArray): NDArray;
    samplePoisson(arg0: NDArray, arg1: Shape): NDArray;
    setName(arg0: string): void;
    tempAttachAll(...arg0: NDResource[]): void;
    tempAttachInternal(arg0: NDManager, arg1: string, arg2: NDResource): void;
    toString(): string;
    truncatedNormal(arg0: Shape): NDArray;
    truncatedNormal(arg0: Shape, arg1: DataType): NDArray;
    truncatedNormal(arg0: number, arg1: number, arg2: Shape, arg3: DataType): NDArray;
    truncatedNormal(arg0: number, arg1: number, arg2: Shape, arg3: DataType, arg4: Device): NDArray;
    zeros(arg0: Shape): NDArray;
    zeros(arg0: Shape, arg1: DataType): NDArray;
    zeros(arg0: Shape, arg1: DataType, arg2: Device): NDArray;
}