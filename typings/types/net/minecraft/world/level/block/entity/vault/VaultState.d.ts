import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { VaultConfig } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultConfig.d.ts'
import type { VaultServerData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultServerData.d.ts'
import type { VaultSharedData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultSharedData.d.ts'
import type { VaultState$LightLevel } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultState$LightLevel.d.ts'
export class VaultState extends Enum<VaultState> implements StringRepresentable {
    static ACTIVE: VaultState;
    static EJECTING: VaultState;
    static INACTIVE: VaultState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static UNLOCKING: VaultState;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): VaultState;
    static values(): (Object | null)[];
    private constructor(stateName: string, lightLevel: VaultState$LightLevel)
    // private lightLevel: VaultState$LightLevel;
    // private stateName: string;
    // private ejectResultItem(serverLevel: ServerLevel, pos: BlockPos, itemToEject: ItemStack, ejectionSoundProgress: number): void;
    getSerializedName(): string;
    lightLevel(): number;
    onEnter(serverLevel: ServerLevel, pos: BlockPos, config: VaultConfig, sharedData: VaultSharedData, isOminous: boolean): void;
    onExit(serverLevel: ServerLevel, pos: BlockPos, config: VaultConfig, sharedData: VaultSharedData): void;
    onTransition(serverLevel: ServerLevel, pos: BlockPos, to: VaultState, config: VaultConfig, sharedData: VaultSharedData, isOminous: boolean): void;
    tickAndGetNext(serverLevel: ServerLevel, pos: BlockPos, config: VaultConfig, serverData: VaultServerData, sharedData: VaultSharedData): VaultState;
    name(): "INACTIVE" | "ACTIVE" | "UNLOCKING" | "EJECTING";
}