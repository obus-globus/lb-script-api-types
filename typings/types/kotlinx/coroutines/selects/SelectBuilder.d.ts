import type { Object } from '../../../java/lang/Object.d.ts'
export interface SelectBuilder<R extends Object | number | string | boolean> extends Object {
    onTimeout(timeMillis: number, block: () => R): void;
}