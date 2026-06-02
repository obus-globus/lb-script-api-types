import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ParameterConsumer<S extends Object | number | string | boolean> extends Object{
    accept(parameter: Object, parameterIndex: number, state: S): void;
}