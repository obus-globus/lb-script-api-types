import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BossBar } from '../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossBar.d.ts'
import type { BossColor } from '../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossColor.d.ts'
import type { BossFlag } from '../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossFlag.d.ts'
import type { BossStyle } from '../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossStyle.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { CommonBoss$UpdateAction } from '../../../../../com/viaversion/viaversion/legacy/bossbar/CommonBoss$UpdateAction.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommonBoss extends Object implements BossBar {
    constructor(arg0: string, arg1: number, arg2: BossColor, arg3: BossStyle)
    readonly color: BossColor;
    readonly connections: Map<UUID, UserConnection>;
    readonly flags: BossFlag[];
    readonly health: number;
    readonly style: BossStyle;
    readonly title: string;
    readonly uuid: UUID;
    readonly visible: boolean;
    addConnection(arg0: UserConnection): BossBar;
    addFlag(arg0: BossFlag): BossBar;
    addPlayer(arg0: UUID): BossBar;
    // private flagToBytes(): number;
    getColor(): BossColor;
    getConnections(): UserConnection[];
    getFlags(): BossFlag[];
    getHealth(): number;
    getId(): UUID;
    // private getPacket(arg0: CommonBoss$UpdateAction, arg1: UserConnection): PacketWrapper;
    getPlayers(): UUID[];
    getStyle(): BossStyle;
    getTitle(): string;
    getUuid(): UUID;
    hasFlag(arg0: BossFlag): boolean;
    hide(): BossBar;
    isVisible(): boolean;
    removeConnection(arg0: UserConnection): BossBar;
    removeFlag(arg0: BossFlag): BossBar;
    removePlayer(arg0: UUID): BossBar;
    // private sendPacket(arg0: CommonBoss$UpdateAction): void;
    // private sendPacketConnection(arg0: UserConnection, arg1: PacketWrapper): void;
    setColor(arg0: BossColor): BossBar;
    setHealth(arg0: number): BossBar;
    setStyle(arg0: BossStyle): BossBar;
    setTitle(arg0: string): BossBar;
    // private setVisible(arg0: boolean): void;
    show(): BossBar;
}