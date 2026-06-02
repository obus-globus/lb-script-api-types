import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AtomicBoolean extends Object implements Serializable {
    constructor()
    constructor(arg0: boolean)
    // private value: number;
    compareAndExchange(arg0: boolean, arg1: boolean): boolean;
    compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean;
    compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean;
    compareAndSet(arg0: boolean, arg1: boolean): boolean;
    get(): boolean;
    getAcquire(): boolean;
    getAndSet(arg0: boolean): boolean;
    getOpaque(): boolean;
    getPlain(): boolean;
    lazySet(arg0: boolean): void;
    set(arg0: boolean): void;
    setOpaque(arg0: boolean): void;
    setPlain(arg0: boolean): void;
    setRelease(arg0: boolean): void;
    toString(): string;
    weakCompareAndSet(arg0: boolean, arg1: boolean): boolean;
    weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean;
    weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean;
    weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean;
    weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean;
}