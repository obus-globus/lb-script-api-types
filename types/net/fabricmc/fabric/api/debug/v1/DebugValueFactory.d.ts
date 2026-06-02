import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DebugValueFactory<D extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    create(arg0: D): T;
}