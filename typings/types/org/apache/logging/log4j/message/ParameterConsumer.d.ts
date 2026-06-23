import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ParameterConsumer<S extends unknown> extends Object{
    accept(parameter: Object, parameterIndex: number, state: S): void;
}