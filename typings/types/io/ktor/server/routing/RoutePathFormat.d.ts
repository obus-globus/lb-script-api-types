import type { RoutePathComponent } from '../../../../io/ktor/server/routing/RoutePathComponent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RoutePathFormat extends Object{
    format(selector: RoutePathComponent): string;
}