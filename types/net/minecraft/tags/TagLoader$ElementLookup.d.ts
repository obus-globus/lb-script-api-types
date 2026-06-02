import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export interface TagLoader$ElementLookup<T extends Object | number | string | boolean> extends Object{
    get(id: Identifier, required: boolean): Optional<T>;
}