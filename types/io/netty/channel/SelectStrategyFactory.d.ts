import type { SelectStrategy } from '../../../io/netty/channel/SelectStrategy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SelectStrategyFactory extends Object{
    newSelectStrategy(): SelectStrategy;
}