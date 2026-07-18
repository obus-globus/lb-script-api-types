import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CompositeRouteSelector extends Object{
    subSelectors(): RouteSelector[];
}