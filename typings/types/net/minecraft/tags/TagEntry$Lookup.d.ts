import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export interface TagEntry$Lookup<T extends Object | number | string | boolean> extends Object{
    element(key: Identifier, required: boolean): T;
    tag(key: Identifier): E[];
}