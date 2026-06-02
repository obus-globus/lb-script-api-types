import type { AbstractAppender$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender$Builder.d.ts'
import type { RewritePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/RewritePolicy.d.ts'
import type { PurgePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/PurgePolicy.d.ts'
import type { Routes } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Routes.d.ts'
import type { RoutingAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender.d.ts'
import type { AbstractScript } from '../../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class RoutingAppender$Builder<B extends RoutingAppender$Builder<B>> extends AbstractAppender$Builder<B> implements Builder<RoutingAppender> {
    constructor()
    readonly defaultRouteScript: AbstractScript;
    readonly purgePolicy: PurgePolicy;
    readonly rewritePolicy: RewritePolicy;
    readonly routes: Routes;
    build(): RoutingAppender;
    getDefaultRouteScript(): AbstractScript;
    getErrorPrefix(): string;
    getPurgePolicy(): PurgePolicy;
    getRewritePolicy(): RewritePolicy;
    getRoutes(): Routes;
    isValid(): boolean;
    withDefaultRouteScript(defaultRouteScript: AbstractScript): B;
    withPurgePolicy(purgePolicy: PurgePolicy): void;
    withRewritePolicy(rewritePolicy: RewritePolicy): B;
    withRoutes(routes: Routes): B;
}