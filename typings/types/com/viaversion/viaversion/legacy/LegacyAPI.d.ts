import type { LegacyViaAPI } from '../../../../com/viaversion/viaversion/api/legacy/LegacyViaAPI.d.ts'
import type { BossBar } from '../../../../com/viaversion/viaversion/api/legacy/bossbar/BossBar.d.ts'
import type { BossColor } from '../../../../com/viaversion/viaversion/api/legacy/bossbar/BossColor.d.ts'
import type { BossStyle } from '../../../../com/viaversion/viaversion/api/legacy/bossbar/BossStyle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LegacyAPI<T extends unknown> extends Object implements LegacyViaAPI<T> {
    constructor()
    createLegacyBossBar(arg0: string, arg1: BossColor, arg2: BossStyle): BossBar;
    createLegacyBossBar(arg0: string, arg1: number, arg2: BossColor, arg3: BossStyle): BossBar;
}