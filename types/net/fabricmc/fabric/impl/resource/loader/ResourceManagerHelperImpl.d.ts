import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IdentifiableResourceReloadListener } from '../../../../../../net/fabricmc/fabric/api/resource/IdentifiableResourceReloadListener.d.ts'
import type { ResourceManagerHelper } from '../../../../../../net/fabricmc/fabric/api/resource/ResourceManagerHelper.d.ts'
import type { ResourcePackActivationType } from '../../../../../../net/fabricmc/fabric/api/resource/ResourcePackActivationType.d.ts'
import type { ResourceLoader } from '../../../../../../net/fabricmc/fabric/api/resource/v1/ResourceLoader.d.ts'
import type { ModContainer } from '../../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackType } from '../../../../../../net/minecraft/server/packs/PackType.d.ts'
export class ResourceManagerHelperImpl extends Object implements ResourceManagerHelper {
    static get(paramarg0: PackType): ResourceManagerHelper;
    static get(paramarg0: PackType): ResourceManagerHelperImpl;
    static registerBuiltinResourcePack(paramarg0: Identifier, paramarg1: string, paramarg2: ModContainer, paramarg3: boolean): boolean;
    static registerBuiltinResourcePack(paramarg0: Identifier, paramarg1: ModContainer, paramarg2: string, paramarg3: ResourcePackActivationType): boolean;
    static registerBuiltinResourcePack(paramarg0: Identifier, paramarg1: ModContainer, paramarg2: ResourcePackActivationType): boolean;
    static registerBuiltinResourcePack(paramarg0: Identifier, paramarg1: ModContainer, paramarg2: Component, paramarg3: ResourcePackActivationType): boolean;
    private constructor(arg0: PackType)
    // private resourceLoader: ResourceLoader;
    addReloadListener(arg0: IdentifiableResourceReloadListener): void;
    registerReloadListener(arg0: IdentifiableResourceReloadListener): void;
    registerReloadListener(arg0: Identifier, arg1: (param0: HolderLookup$Provider) => IdentifiableResourceReloadListener): void;
}