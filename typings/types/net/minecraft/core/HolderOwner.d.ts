import type { Object } from '../../../java/lang/Object.d.ts'
export interface HolderOwner<T extends unknown> extends Object{
    canSerializeIn(context: HolderOwner<T>): boolean;
}