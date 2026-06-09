import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NotNullLazyValue<T extends Object | number | string | boolean> extends Object {
    isComputed(): boolean;
}