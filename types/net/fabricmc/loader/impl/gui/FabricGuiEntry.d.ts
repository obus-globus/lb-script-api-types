import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FabricStatusTree } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree.d.ts'
export class FabricGuiEntry extends Object {
    static displayCriticalError(paramarg0: Throwable, paramarg1: boolean): void;
    static displayError(paramarg0: string, paramarg1: Throwable, paramarg2: boolean): void;
    static displayError(paramarg0: string, paramarg1: Throwable, paramarg2: (param0: FabricStatusTree) => void, paramarg3: boolean): void;
    static main(paramarg0: (Object | null)[]): void;
    static open(paramarg0: FabricStatusTree): void;
    constructor()
}