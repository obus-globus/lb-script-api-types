import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface ValueConverter<V extends Object | number | string | boolean> extends Object{
    convert(arg0: string): V;
    valuePattern(): string;
    valueType(): Class<V>;
}