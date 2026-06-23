import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ShortObjectMap$PrimitiveEntry<V extends unknown> extends Object{
    key(): number;
    setValue(arg0: V): void;
    value(): V;
}