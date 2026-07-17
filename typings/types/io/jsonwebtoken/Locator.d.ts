import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Locator<T extends unknown> extends Object{
    locate(arg0: JavaMap<any, any>): T;
}