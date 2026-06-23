import type { AbstractFastThreadLocal } from '../../../../../com/oracle/truffle/api/impl/AbstractFastThreadLocal.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultContextThreadLocal extends AbstractFastThreadLocal {
    constructor()
    // private threadLocal: ThreadLocal<Object[]>;
    fastGet<C extends unknown>(index: number, castType: Class<C>, invalidateOnNull: boolean, nonNullResult: boolean): C;
    get(): Object[];
    set(data: Object[]): void;
}