import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackSelectionConfig } from '../../../../../../net/minecraft/server/packs/PackSelectionConfig.d.ts'
import type { PackType } from '../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { Pack } from '../../../../../../net/minecraft/server/packs/repository/Pack.d.ts'
import type { PackSource } from '../../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
import type { RepositorySource } from '../../../../../../net/minecraft/server/packs/repository/RepositorySource.d.ts'
export class ModResourcePackCreator extends Object implements RepositorySource {
    static BASE_PARENT: (param0: string[]) => boolean;
    static CLIENT_RESOURCE_PACK_PROVIDER: ModResourcePackCreator;
    static HIGH_CONTRAST_PARENT: (param0: string[]) => boolean;
    static MAX_KNOWN_PACKS: number;
    static POST_CHANGE_HANDLE_REQUIRED: string[];
    static PROGRAMMER_ART_PARENT: (param0: string[]) => boolean;
    static RESOURCE_PACK_SOURCE: PackSource;
    static VANILLA: string;
    constructor(arg0: PackType)
    constructor(arg0: PackType, arg1: boolean)
    // private activationInfo: PackSelectionConfig;
    // private forKnownPacksManager: boolean;
    // private type: PackType;
    loadPacks(arg0: (param0: Pack) => void): void;
    // private registerModPack(arg0: (param0: Pack) => void, arg1: string, arg2: (param0: string[]) => boolean): void;
}