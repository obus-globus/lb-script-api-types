import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ConsumerTracking extends Object {
    currentConsumer(): (param0: string) => void;
    forkIfDefault(): ConsumerTracking;
    setCurrentConsumer(arg0: (param0: string) => void): void;
}