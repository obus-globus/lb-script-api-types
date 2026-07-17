import type { JavaMap } from '../../../JavaMap.d.ts'
import type { BytesSupplier } from '../../../ai/djl/ndarray/BytesSupplier.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { DataOutputStream } from '../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Input extends Object {
    static decode(paramarg0: InputStream): Input;
    constructor()
    readonly cancelled: boolean;
    content: Pair<string, BytesSupplier>[];
    properties: JavaMap<string, string>;
    add(arg0: BytesSupplier): void;
    add(arg0: number[]): void;
    add(arg0: number, arg1: string, arg2: BytesSupplier): void;
    add(arg0: string): void;
    add(arg0: string, arg1: BytesSupplier): void;
    add(arg0: string, arg1: number[]): void;
    add(arg0: string, arg1: string): void;
    addProperty(arg0: string, arg1: string): void;
    deepEquals(arg0: Object): boolean;
    encode(): number[];
    encodeInputBase(arg0: DataOutputStream): void;
    get(arg0: number): BytesSupplier;
    get(arg0: string): BytesSupplier;
    getAsBytes(arg0: number): number[];
    getAsBytes(arg0: string): number[];
    getAsNDArray(arg0: NDManager, arg1: number): NDArray;
    getAsNDArray(arg0: NDManager, arg1: string): NDArray;
    getAsNDList(arg0: NDManager, arg1: number): (Object | null)[];
    getAsNDList(arg0: NDManager, arg1: string): (Object | null)[];
    getAsString(arg0: number): string;
    getAsString(arg0: string): string;
    getContent(): Pair<string, BytesSupplier>[];
    getContentAsBuffers(): Pair<string, ByteBuffer>[];
    getData(): BytesSupplier;
    getDataAsNDList(arg0: NDManager): (Object | null)[];
    getProperties(): JavaMap<string, string>;
    getProperty(arg0: string, arg1: string): string;
    isCancelled(): boolean;
    setCancelled(arg0: boolean): void;
    setContent(arg0: Pair<string, BytesSupplier>[]): void;
    setProperties(arg0: JavaMap<string, string>): void;
    toString(): string;
}