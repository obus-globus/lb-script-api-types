import type { ObservableInputStream } from '../../../../../org/apache/commons/io/input/ObservableInputStream.d.ts'
import type { ObservableInputStream$Observer } from '../../../../../org/apache/commons/io/input/ObservableInputStream$Observer.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
export abstract class ObservableInputStream$AbstractBuilder<T extends ObservableInputStream$AbstractBuilder<T>> extends ProxyInputStream$AbstractBuilder<ObservableInputStream, T> {
    constructor()
    readonly observers: ObservableInputStream$Observer[];
    setObservers(arg0: ObservableInputStream$Observer[]): void;
}