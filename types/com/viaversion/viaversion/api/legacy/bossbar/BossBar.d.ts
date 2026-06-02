import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BossColor } from '../../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossColor.d.ts'
import type { BossFlag } from '../../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossFlag.d.ts'
import type { BossStyle } from '../../../../../../com/viaversion/viaversion/api/legacy/bossbar/BossStyle.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BossBar extends Object{
    addConnection(arg0: UserConnection): BossBar;
    addFlag(arg0: BossFlag): BossBar;
    addPlayer(arg0: UUID): BossBar;
    getColor(): BossColor;
    getConnections(): UserConnection[];
    getHealth(): number;
    getId(): UUID;
    getPlayers(): UUID[];
    getStyle(): BossStyle;
    getTitle(): string;
    hasFlag(arg0: BossFlag): boolean;
    hide(): BossBar;
    isVisible(): boolean;
    removeConnection(arg0: UserConnection): BossBar;
    removeFlag(arg0: BossFlag): BossBar;
    removePlayer(arg0: UUID): BossBar;
    setColor(arg0: BossColor): BossBar;
    setHealth(arg0: number): BossBar;
    setStyle(arg0: BossStyle): BossBar;
    setTitle(arg0: string): BossBar;
    show(): BossBar;
}