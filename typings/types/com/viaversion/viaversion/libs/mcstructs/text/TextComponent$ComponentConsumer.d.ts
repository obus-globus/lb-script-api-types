import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TextComponent$ComponentConsumer extends Consumer<string>, Object{
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    withConsumer(arg0: (param0: Object | null) => void): (param0: Object | null) => void;
}