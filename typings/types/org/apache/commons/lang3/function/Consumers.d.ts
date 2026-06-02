import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Consumers extends Object {
    static accept(paramarg0: (param0: Object | null) => void, paramarg1: Object | null): void;
    static nop(): (param0: Object | null) => void;
    private constructor()
}