import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ManagerFactory<M extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    createManager(name: string, data: T): M;
}