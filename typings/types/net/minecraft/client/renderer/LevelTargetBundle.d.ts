import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChain$TargetBundle } from '../../../../net/minecraft/client/renderer/PostChain$TargetBundle.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class LevelTargetBundle extends Object implements PostChain$TargetBundle {
    static CLOUDS_TARGET_ID: Identifier;
    static ENTITY_OUTLINE_TARGET_ID: Identifier;
    static ITEM_ENTITY_TARGET_ID: Identifier;
    static MAIN_TARGETS: Identifier[];
    static MAIN_TARGET_ID: Identifier;
    static OUTLINE_TARGETS: Identifier[];
    static PARTICLES_TARGET_ID: Identifier;
    static SORTING_TARGETS: Identifier[];
    static TRANSLUCENT_TARGET_ID: Identifier;
    static WEATHER_TARGET_ID: Identifier;
    constructor()
    clouds: ResourceHandle<RenderTarget>;
    entityOutline: ResourceHandle<RenderTarget>;
    itemEntity: ResourceHandle<RenderTarget>;
    main: ResourceHandle<RenderTarget>;
    particles: ResourceHandle<RenderTarget>;
    translucent: ResourceHandle<RenderTarget>;
    weather: ResourceHandle<RenderTarget>;
    clear(): void;
    get(id: Identifier): ResourceHandle<RenderTarget>;
    getOrThrow(id: Identifier): ResourceHandle<RenderTarget>;
    replace(id: Identifier, handle: ResourceHandle<RenderTarget>): void;
}