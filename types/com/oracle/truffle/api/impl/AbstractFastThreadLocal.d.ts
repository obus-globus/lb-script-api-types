import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractFastThreadLocal extends Object {
    constructor()
    fastGet<C extends Object | number | string | boolean>(index: number, castType: Class<C>, invalidateOnNull: boolean, nonNullResult: boolean): C;
    get(): Object[];
    set(data: Object[]): void;
}