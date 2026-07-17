import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EventKey extends Object {
    constructor(arg0: string, arg1: JavaMap<any, any>)
    readonly eventName: string;
    readonly requestId: string;
    equals(arg0: Object | null): boolean;
    getEventName(): string;
    getRequestId(): string;
    hashCode(): number;
}