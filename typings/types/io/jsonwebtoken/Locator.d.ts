import type { Object } from '../../java/lang/Object.d.ts'
export interface Locator<T extends Object | number | string | boolean> extends Object{
    locate(arg0: Header): T;
}