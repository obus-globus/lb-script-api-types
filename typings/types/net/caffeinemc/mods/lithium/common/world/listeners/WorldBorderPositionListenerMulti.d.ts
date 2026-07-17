import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { WorldBorderListenerOnce } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/listeners/WorldBorderListenerOnce.d.ts'
import type { BorderChangeListener } from '../../../../../../../net/minecraft/world/level/border/BorderChangeListener.d.ts'
import type { WorldBorder } from '../../../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export class WorldBorderPositionListenerMulti extends Object implements BorderChangeListener {
    constructor()
    // private delegate: JavaMap<WorldBorderListenerOnce, Object>;
    add(arg0: WorldBorderListenerOnce): void;
    onAreaReplaced(arg0: WorldBorder): void;
    onLerpSize(arg0: WorldBorder, arg1: number, arg2: number, arg3: number, arg4: number): void;
    onSetCenter(arg0: WorldBorder, arg1: number, arg2: number): void;
    onSetDamagePerBlock(arg0: WorldBorder, arg1: number): void;
    onSetSafeZone(arg0: WorldBorder, arg1: number): void;
    onSetSize(arg0: WorldBorder, arg1: number): void;
    onSetWarningBlocks(arg0: WorldBorder, arg1: number): void;
    onSetWarningTime(arg0: WorldBorder, arg1: number): void;
}