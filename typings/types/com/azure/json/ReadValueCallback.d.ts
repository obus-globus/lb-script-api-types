import type { Object } from '../../../java/lang/Object.d.ts'
export interface ReadValueCallback<T extends unknown, R extends unknown> extends Object{
    read(arg0: T): R;
}