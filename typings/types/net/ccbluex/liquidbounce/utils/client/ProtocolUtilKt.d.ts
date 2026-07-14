import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientProtocolVersion } from '../../../../../net/ccbluex/liquidbounce/utils/client/ClientProtocolVersion.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class ProtocolUtilKt extends Object {
    /**
     * Both 1.20.3 and 1.20.4 use protocol 765, so we can use this as a default
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:46}
     */
    static getDefaultProtocolVersion(): ClientProtocolVersion;
    static getProtocolVersion(): ClientProtocolVersion;
    static getProtocolVersions(): (Object | null)[];
    static getUsesViaFabricPlus(): boolean;
    static isBlocksAttacksExisting(): boolean;
    /**
     * 1.21.4 client + 1.8 server can block with sword,
     * but the {@link net.minecraft.world.item.ItemStack} has no
     * {@link net.minecraft.core.component.DataComponents.BLOCKS_ATTACKS}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:139}
     */
    static isEqual1_21_4(): boolean;
    static isEqual1_8(): boolean;
    static isNewerThanOrEquals1_16(): boolean;
    /**
     * Since 1.21.5 anything can be used to blocking
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L150 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:150}
     */
    static isNewerThanOrEquals1_21_5(): boolean;
    /**
     * Since 1.21.6 the {@link ServerboundPlayerCommandPacket.Action} removed 2 entries for sneaking
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L161 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:161}
     */
    static isNewerThanOrEquals1_21_6(): boolean;
    /**
     * Since 1.21.9 the byte format of {@link net.minecraft.world.phys.Vec3} have been rewritten
     * with {@link net.minecraft.network.LpVec3}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L173 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:173}
     */
    static isNewerThanOrEquals1_21_9(): boolean;
    static isOlderThanOrEqual1_11_1(): boolean;
    static isOlderThanOrEqual1_12_2(): boolean;
    /**
     * Offhand cannot be used as a SWAP target in any container on 1.15.2 and below.
     *
     * https://github.com/ViaVersion/ViaFabricPlus/blame/b03638ee999f658856e8284f135bcbf55fc596a8/src/main/java/com/viaversion/viafabricplus/injection/mixin/features/interaction/container_clicking/MixinMultiPlayerGameMode.java#L101
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:118}
     */
    static isOlderThanOrEqual1_15_2(): boolean;
    static isOlderThanOrEqual1_8(): boolean;
    /**
     * Since 26.1 {@link net.minecraft.network.protocol.game.ServerboundInteractPacket} has only one mode
     * with entity and relative position (previous `INTERACT_AT`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ProtocolUtil.kt:185}
     */
    static isOlderThanOrEquals1_21_11(): boolean;
    static isOlderThanOrEquals1_7_10(): boolean;
    static openVfpProtocolSelection(): void;
    static selectProtocolVersion(protocolId: number): void;
    static send1_8PlayerInput(sideways: number, forward: number, jumping: boolean, sneaking: boolean): void;
    static send1_8SignUpdate(blockPos: BlockPos, lines: (Object | null)[]): void;
}