import type { IOBiConsumer } from '../../../../../org/apache/commons/io/function/IOBiConsumer.d.ts'
import type { BoundedInputStream } from '../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
export abstract class BoundedInputStream$AbstractBuilder<T extends BoundedInputStream$AbstractBuilder<T>> extends ProxyInputStream$AbstractBuilder<BoundedInputStream, T> {
    constructor()
    // private count: number;
    // private maxCount: number;
    // private onMaxCount: (param0: number, param1: number) => void;
    // private propagateClose: boolean;
    getCount(): number;
    getMaxCount(): number;
    getOnMaxCount(): (param0: number, param1: number) => void;
    isPropagateClose(): boolean;
    setCount(arg0: number): T;
    setMaxCount(arg0: number): T;
    setOnMaxCount(arg0: (param0: number, param1: number) => void): T;
    setPropagateClose(arg0: boolean): T;
}