import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RequestHandler$Request } from '../../../../../net/ccbluex/liquidbounce/utils/client/RequestHandler$Request.d.ts'
export class RequestHandler<T extends unknown> extends Object {
    constructor()
    // private activeRequests: RequestHandler$Request<T>[];
    // private currentTick: number;
    getActiveRequestValue(): T | null;
    request(request: RequestHandler$Request<T>): void;
    tick(deltaTime: number): void;
}