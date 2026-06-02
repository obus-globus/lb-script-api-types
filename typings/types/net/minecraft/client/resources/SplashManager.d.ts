import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { User } from '../../../../net/minecraft/client/User.d.ts'
import type { SplashRenderer } from '../../../../net/minecraft/client/gui/components/SplashRenderer.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class SplashManager extends SimplePreparableReloadListener<Component[]> implements FabricResourceReloader {
    static CHRISTMAS: Component;
    static HALLOWEEN: Component;
    static NEW_YEAR: Component;
    constructor(user: User)
    // private fabric$id: Identifier;
    // private splashes: Component[];
    // private user: User;
    apply(preparations: Component[], manager: ResourceManager, profiler: ProfilerFiller): void;
    fabric$getId(): Identifier;
    getName(): string;
    getSplash(): SplashRenderer;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): Component[];
}