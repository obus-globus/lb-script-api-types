import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { IOIntConsumer } from '../../../../../org/apache/commons/io/function/IOIntConsumer.d.ts'
export abstract class ProxyInputStream$AbstractBuilder<T extends Object | number | string | boolean, B extends AbstractStreamBuilder<T, B>> extends AbstractStreamBuilder<T, B> {
    constructor()
    readonly afterRead: (param0: number) => void;
    getAfterRead(): (param0: number) => void;
    setAfterRead(arg0: (param0: number) => void): B;
}