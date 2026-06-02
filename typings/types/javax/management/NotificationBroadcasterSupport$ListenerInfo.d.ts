import type { NotificationFilter } from '../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../javax/management/NotificationListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class NotificationBroadcasterSupport$ListenerInfo extends Object {
    constructor(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object)
    // private filter: NotificationFilter;
    // private handback: Object;
    // private listener: NotificationListener;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}