import type { SelectStrategy } from '../../../io/netty/channel/SelectStrategy.d.ts'
import type { IntSupplier } from '../../../io/netty/util/IntSupplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultSelectStrategy extends Object implements SelectStrategy {
    static BUSY_WAIT: number;
    static CONTINUE: number;
    static SELECT: number;
    private constructor()
    calculateStrategy(arg0: IntSupplier, arg1: boolean): number;
}