import type { Object } from '../../../java/lang/Object.d.ts'
export interface FlowCollector<T extends Object | number | string | boolean> extends Object{
    emit(value: T): void;
}