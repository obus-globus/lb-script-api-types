import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ManagerFactory<M extends unknown, T extends unknown> extends Object{
    createManager(name: string, data: T): M;
}