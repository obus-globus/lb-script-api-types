import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { OptionalBox$Mu } from '../../../../com/mojang/datafixers/kinds/OptionalBox$Mu.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptionalBox<T extends Object | number | string | boolean> extends Object implements App<OptionalBox$Mu, T> {
    static create(paramarg0: Optional<Object>): OptionalBox<Object>;
    static unbox(paramarg0: App<OptionalBox$Mu, Object>): Optional<Object>;
    private constructor(arg0: Optional<T>)
    // private value: Optional<T>;
}