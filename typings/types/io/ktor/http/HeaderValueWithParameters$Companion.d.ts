import type { HeaderValueParam } from '../../../io/ktor/http/HeaderValueParam.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HeaderValueWithParameters$Companion extends Object {
    parse<R extends unknown>(value: string, init: (param0: string, param1: HeaderValueParam[]) => R): R;
}