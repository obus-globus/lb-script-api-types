import type { BaseApplicationPlugin } from '../../../../io/ktor/server/application/BaseApplicationPlugin.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { Plugin } from '../../../../io/ktor/server/application/Plugin.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationPluginKt extends Object {
    static getPluginRegistry<A extends Pipeline<Object, PipelineCall>>(paramarg0: A): Attributes;
    static getPluginRegistryKey(): AttributeKey<Attributes>;
    static install<F extends unknown, P extends RoutingNode, B extends unknown>(self: P, plugin: BaseApplicationPlugin<P, B, F>, configure: (param0: B) => void): F;
    static install<F extends unknown, P extends Pipeline<Object, PipelineCall>, B extends unknown>(self: P, plugin: Plugin<P, B, F>, configure: (param0: B) => void): F;
    static plugin<F extends unknown, A extends Pipeline<Object, PipelineCall>>(self: A, plugin: Plugin<any, Object, F>): F;
    static pluginOrNull<F extends unknown, A extends Pipeline<Object, PipelineCall>>(self: A, plugin: Plugin<any, Object, F>): F | null;
    static uninstall<A extends Pipeline<Object, PipelineCall>, B extends unknown, F extends unknown>(self: A, plugin: Plugin<A, B, F>): void;
    static uninstallAllPlugins<A extends Pipeline<Object, PipelineCall>>(self: A): void;
    static uninstallPlugin<A extends Pipeline<Object, PipelineCall>, F extends unknown>(self: A, key: AttributeKey<F>): void;
}