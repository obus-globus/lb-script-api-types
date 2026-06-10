import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityClassGroup } from '../../../../../../../net/caffeinemc/mods/lithium/common/entity/EntityClassGroup.d.ts'
export interface ClassGroupFilterableList<T extends Object | number | string | boolean> extends Object{
    lithium$getAllOfGroupType(arg0: EntityClassGroup): T[];
}