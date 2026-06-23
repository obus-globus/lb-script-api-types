import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EntityTypeTest<B extends unknown, T extends B> extends Object{
    getBaseClass(): Class<B>;
    tryCast(entity: B): T;
}