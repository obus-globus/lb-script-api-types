import type { AbstractFastThreadLocal } from '../../../../com/oracle/truffle/api/impl/AbstractFastThreadLocal.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OptimizedFastThreadLocal extends AbstractFastThreadLocal {
    constructor()
    fastGet<C extends unknown>(index: number, castType: Class<C>, invalidateOnNull: boolean, nonNullResult: boolean): C;
    get(): Object[];
    set(data: Object[]): void;
}