import type { Dispatcher } from '../../../../com/google/common/eventbus/Dispatcher.d.ts'
import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Dispatcher$ImmediateDispatcher extends Dispatcher {
    private constructor()
    dispatch(event: Object, subscribers: Iterator<Subscriber>): void;
}