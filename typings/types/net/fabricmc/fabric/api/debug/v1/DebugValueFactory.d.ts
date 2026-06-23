import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DebugValueFactory<D extends unknown, T extends unknown> extends Object{
    create(arg0: D): T;
}