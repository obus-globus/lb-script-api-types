import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface OptionBinding<V extends unknown> extends Object{
    load(): V;
    save(arg0: V): void;
}