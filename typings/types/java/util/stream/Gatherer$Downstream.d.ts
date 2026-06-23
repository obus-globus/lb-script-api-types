import type { Object } from '../../../java/lang/Object.d.ts'
export interface Gatherer$Downstream<T extends unknown> extends Object{
    isRejecting(): boolean;
    push(arg0: T): boolean;
}