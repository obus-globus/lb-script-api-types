import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BorderChangeListener } from '../../../../../../../net/minecraft/world/level/border/BorderChangeListener.d.ts'
import type { WorldBorder } from '../../../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export interface WorldBorderListenerOnce extends Object, BorderChangeListener{
    lithium$onWorldBorderShapeChange(arg0: WorldBorder): void;
    onAreaReplaced(arg0: WorldBorder): void;
    onLerpSize(arg0: WorldBorder, arg1: number, arg2: number, arg3: number, arg4: number): void;
    onSetCenter(arg0: WorldBorder, arg1: number, arg2: number): void;
    onSetDamagePerBlock(arg0: WorldBorder, arg1: number): void;
    onSetSafeZone(arg0: WorldBorder, arg1: number): void;
    onSetSize(arg0: WorldBorder, arg1: number): void;
    onSetWarningBlocks(arg0: WorldBorder, arg1: number): void;
    onSetWarningTime(arg0: WorldBorder, arg1: number): void;
}