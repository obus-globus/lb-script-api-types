import type { SelectStrategy } from '../../../io/netty/channel/SelectStrategy.d.ts'
import type { SelectStrategyFactory } from '../../../io/netty/channel/SelectStrategyFactory.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultSelectStrategyFactory extends Object implements SelectStrategyFactory {
    static INSTANCE: SelectStrategyFactory;
    private constructor()
    newSelectStrategy(): SelectStrategy;
}