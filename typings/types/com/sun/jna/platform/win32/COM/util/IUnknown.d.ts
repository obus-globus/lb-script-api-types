import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IUnknown extends Object{
    queryInterface<T extends unknown>(arg0: Class<T>): T;
}