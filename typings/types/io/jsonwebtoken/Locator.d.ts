import type { Object } from '../../java/lang/Object.d.ts'
export interface Locator<T extends unknown> extends Object{
    locate(arg0: { [key: string]: any }): T;
}