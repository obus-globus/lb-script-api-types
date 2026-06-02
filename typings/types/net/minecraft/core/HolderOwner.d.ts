import type { Object } from '../../../java/lang/Object.d.ts'
export interface HolderOwner<T extends Object | number | string | boolean> extends Object{
    canSerializeIn(context: HolderOwner<T>): boolean;
}