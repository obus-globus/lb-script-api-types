import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PtNDArray } from '../../../../ai/djl/pytorch/engine/PtNDArray.d.ts'
import type { PtNDManager } from '../../../../ai/djl/pytorch/engine/PtNDManager.d.ts'
import type { NativeResource } from '../../../../ai/djl/util/NativeResource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IValue extends NativeResource<number> {
    static from(paramarg0: PtNDArray): IValue;
    static from(paramarg0: boolean): IValue;
    static from(paramarg0: number): IValue;
    static from(paramarg0: string): IValue;
    static listFrom(...paramarg0: PtNDArray[]): IValue;
    static listFrom(...paramarg0: IValue[]): IValue;
    static listFrom(...paramarg0: boolean[]): IValue;
    static listFrom(...paramarg0: number[]): IValue;
    static stringIValueMapFrom(paramarg0: JavaMap<string, IValue>): IValue;
    static stringMapFrom(paramarg0: JavaMap<string, PtNDArray>): IValue;
    static tupleFrom(...paramarg0: IValue[]): IValue;
    constructor(arg0: number)
    close(): void;
    getType(): string;
    isBoolean(): boolean;
    isBooleanList(): boolean;
    isDouble(): boolean;
    isDoubleList(): boolean;
    isList(): boolean;
    isLong(): boolean;
    isLongList(): boolean;
    isMap(): boolean;
    isString(): boolean;
    isTensor(): boolean;
    isTensorList(): boolean;
    isTuple(): boolean;
    toBoolean(): boolean;
    toBooleanArray(): boolean[];
    toDouble(): number;
    toDoubleArray(): number[];
    toIValueArray(): IValue[];
    toIValueMap(): JavaMap<string, IValue>;
    toIValueTuple(): IValue[];
    toLong(): number;
    toLongArray(): number[];
    toNDList(arg0: PtNDManager): (Object | null)[];
    toStringValue(): string;
    toTensor(arg0: PtNDManager): PtNDArray;
    toTensorArray(arg0: PtNDManager): PtNDArray[];
}