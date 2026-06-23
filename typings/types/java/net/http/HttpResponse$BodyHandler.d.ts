import type { HttpResponse$BodySubscriber } from '../../../java/net/http/HttpResponse$BodySubscriber.d.ts'
import type { HttpResponse$ResponseInfo } from '../../../java/net/http/HttpResponse$ResponseInfo.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpResponse$BodyHandler<T extends unknown> extends Object{
    apply(arg0: HttpResponse$ResponseInfo): HttpResponse$BodySubscriber<T>;
}