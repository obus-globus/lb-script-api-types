import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NotNullLazyValue<T extends unknown> extends Object {
    isComputed(): boolean;
}