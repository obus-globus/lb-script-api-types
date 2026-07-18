import type { RoutePathComponent } from '../../../../io/ktor/server/routing/RoutePathComponent.d.ts'
import type { RoutePathFormat } from '../../../../io/ktor/server/routing/RoutePathFormat.d.ts'
import type { RoutePathFormat$Companion } from '../../../../io/ktor/server/routing/RoutePathFormat$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenApiRoutePathFormat extends Object implements RoutePathFormat {
    static Companion: RoutePathFormat$Companion;
    static INSTANCE: OpenApiRoutePathFormat;
    format(selector: RoutePathComponent): string;
}