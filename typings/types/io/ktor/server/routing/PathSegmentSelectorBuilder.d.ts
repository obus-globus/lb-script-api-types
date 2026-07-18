import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PathSegmentSelectorBuilder extends Object {
    static INSTANCE: PathSegmentSelectorBuilder;
    parseConstant(value: string): RouteSelector;
    parseName(value: string): string;
    parseParameter(value: string): RouteSelector;
}