import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): VaultState;
    static values(): VaultState[];
    private constructor(stateName: string, lightLevel: VaultState$LightLevel)
    // private lightLevel: VaultState$LightLevel;
    // private stateName: string;
    getSerializedName(): string;
    lightLevel(): number;
    onEnter(serverLevel: ServerLevel, pos: BlockPos, config: VaultConfig, sharedData: VaultSharedData, isOminous: boolean): void;
    onExit(serverLevel: ServerLevel, pos: BlockPos, config: VaultConfig, sharedData: VaultSharedData): void;
    onTransition(serverLevel: ServerLevel, pos: BlockPos, to: VaultState, config: VaultConfig, sharedData: VaultSharedData, isOminous: boolean): void;
    tickAndGetNext(serverLevel: ServerLevel, pos: BlockPos, config: VaultConfig, serverData: VaultServerData, sharedData: VaultSharedData): VaultState;
    name(): "INACTIVE" | "ACTIVE" | "UNLOCKING" | "EJECTING";
}