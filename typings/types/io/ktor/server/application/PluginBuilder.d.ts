import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { CallContext } from '../../../../io/ktor/server/application/CallContext.d.ts'
import type { Hook } from '../../../../io/ktor/server/application/Hook.d.ts'
import type { HookHandler } from '../../../../io/ktor/server/application/HookHandler.d.ts'
import type { Interception } from '../../../../io/ktor/server/application/Interception.d.ts'
import type { OnCallContext } from '../../../../io/ktor/server/application/OnCallContext.d.ts'
import type { OnCallReceiveContext } from '../../../../io/ktor/server/application/OnCallReceiveContext.d.ts'
import type { OnCallRespondContext } from '../../../../io/ktor/server/application/OnCallRespondContext.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PluginBuilder<PluginConfig extends unknown> extends Object {
    constructor(key: AttributeKey<PluginInstance>)
    // private afterResponseInterceptions: Interception<Object>[];
    /*not mapped: */ getAfterResponseInterceptions$ktor_server_core(): Interception<Object>[];
    readonly application: Application;
    readonly applicationConfig: ApplicationConfig;
    // private callInterceptions: Interception<void>[];
    /*not mapped: */ getCallInterceptions$ktor_server_core(): Interception<void>[];
    readonly environment: ApplicationEnvironment;
    // private hooks: HookHandler<Object>[];
    /*not mapped: */ getHooks$ktor_server_core(): HookHandler<Object>[];
    // private key: AttributeKey<PluginInstance>;
    /*not mapped: */ getKey$ktor_server_core(): AttributeKey<PluginInstance>;
    // private onReceiveInterceptions: Interception<Object>[];
    /*not mapped: */ getOnReceiveInterceptions$ktor_server_core(): Interception<Object>[];
    // private onResponseInterceptions: Interception<Object>[];
    /*not mapped: */ getOnResponseInterceptions$ktor_server_core(): Interception<Object>[];
    /*not mapped: */ getPipeline$ktor_server_core(): ApplicationCallPipeline;
    readonly pluginConfig: PluginConfig;
    newPhase(): PipelinePhase;
    on<HookHandler extends unknown>(hook: Hook<HookHandler>, handler: HookHandler): void;
    onCall(block: (param0: OnCallContext<PluginConfig>, param1: PipelineCall) => void): void;
    onCallReceive(block: (param0: OnCallReceiveContext<PluginConfig>, param1: PipelineCall) => void): void;
    onCallReceive(block: (param0: OnCallReceiveContext<PluginConfig>, param1: PipelineCall, param2: Object) => void): void;
    onCallRespond(block: (param0: OnCallRespondContext<PluginConfig>, param1: PipelineCall) => void): void;
    onCallRespond(block: (param0: OnCallRespondContext<PluginConfig>, param1: PipelineCall, param2: Object) => void): void;
    onCallValidators(block: (param0: OnCallContext<PluginConfig>, param1: PipelineCall) => void): void;
    // private onDefaultPhase<T extends unknown, ContextT extends CallContext<PluginConfig>>(interceptions: Interception<T>[], phase: PipelinePhase, handlerName: string, contextInit: (param0: PluginConfig, param1: PipelineContext<T, PipelineCall>) => ContextT, block: (param0: ContextT, param1: PipelineCall, param2: T) => void): void;
    // private onDefaultPhaseWithMessage<T extends unknown, ContextT extends CallContext<PluginConfig>>(interceptions: Interception<T>[], phase: PipelinePhase, handlerName: string, contextInit: (param0: PluginConfig, param1: PipelineContext<T, PipelineCall>) => ContextT, block: (param0: ContextT, param1: PipelineCall, param2: T) => void): void;
}