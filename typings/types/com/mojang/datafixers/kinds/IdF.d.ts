import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { IdF$Mu } from '../../../../com/mojang/datafixers/kinds/IdF$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdF<A extends Object | number | string | boolean> extends Object implements App<IdF$Mu, A> {
    static create(paramarg0: Object | null): IdF<Object>;
    static get(paramarg0: App<IdF$Mu, Object>): Object | null;
    constructor(arg0: A)
    // private value: A;
    value(): A;
}