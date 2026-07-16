import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { IdF$Mu } from '../../../../com/mojang/datafixers/kinds/IdF$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdF<A extends unknown> extends Object implements App<IdF$Mu, A> {
    static create<A extends unknown>(paramarg0: A): IdF<A>;
    static get<A extends unknown>(paramarg0: App<IdF$Mu, A>): A;
    constructor(arg0: A)
    // private value: A;
    value(): A;
}