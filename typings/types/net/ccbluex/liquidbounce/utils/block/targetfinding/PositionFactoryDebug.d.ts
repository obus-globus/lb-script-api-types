import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebuggedOwner } from '../../../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class PositionFactoryDebug extends Object implements DebuggedOwner {
    static INSTANCE: PositionFactoryDebug;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
}