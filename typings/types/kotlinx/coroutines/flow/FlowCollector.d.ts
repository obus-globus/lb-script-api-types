import type { Object } from '../../../java/lang/Object.d.ts'
export interface FlowCollector<T extends unknown> extends Object{
    emit(value: T): void;
}