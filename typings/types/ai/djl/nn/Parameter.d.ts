import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Parameter$Builder } from '../../../ai/djl/nn/Parameter$Builder.d.ts'
import type { Parameter$Type } from '../../../ai/djl/nn/Parameter$Type.d.ts'
import type { Initializer } from '../../../ai/djl/training/initializer/Initializer.d.ts'
import type { DataInputStream } from '../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../java/io/DataOutputStream.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Parameter extends Object implements AutoCloseable {
    static builder(): Parameter$Builder;
    constructor(arg0: Parameter$Builder)
    readonly array: NDArray;
    readonly id: string;
    readonly initializer: Initializer;
    readonly name: string;
    // private requiresGrad: boolean;
    readonly shape: Shape;
    readonly type: Parameter$Type;
    close(): void;
    freeze(arg0: boolean): void;
    getArray(): NDArray;
    getId(): string;
    getInitializer(): Initializer;
    getName(): string;
    getShape(): Shape;
    getType(): Parameter$Type;
    initialize(arg0: NDManager, arg1: DataType): void;
    isInitialized(): boolean;
    load(arg0: NDManager, arg1: DataInputStream): void;
    requiresGradient(): boolean;
    save(arg0: DataOutputStream): void;
    setArray(arg0: NDArray): void;
    setInitializer(arg0: Initializer): void;
    setShape(arg0: Shape): void;
}