import type { Object } from '../../../java/lang/Object.d.ts'
export interface DirectoryStream$Filter<T extends Object | number | string | boolean> extends Object{
    accept(arg0: T): boolean;
}