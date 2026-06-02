import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class Dispatcher extends Object {
    constructor()
    dispatch(event: Object, subscribers: Iterator<Subscriber>): void;
}