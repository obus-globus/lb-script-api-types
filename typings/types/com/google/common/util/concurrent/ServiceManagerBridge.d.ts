import type { ImmutableMultimap } from '../../../../../com/google/common/collect/ImmutableMultimap.d.ts'
import type { Service } from '../../../../../com/google/common/util/concurrent/Service.d.ts'
import type { Service$State } from '../../../../../com/google/common/util/concurrent/Service$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ServiceManagerBridge extends Object{
    servicesByState(): ImmutableMultimap<Service$State, Service>;
}