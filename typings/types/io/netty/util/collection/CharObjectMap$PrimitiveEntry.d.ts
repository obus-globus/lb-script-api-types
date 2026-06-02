import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CharObjectMap$PrimitiveEntry<V extends Object | number | string | boolean> extends Object{
    key(): string;
    setValue(arg0: V): void;
    value(): V;
}