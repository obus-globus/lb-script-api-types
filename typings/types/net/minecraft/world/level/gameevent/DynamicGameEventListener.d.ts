import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
export class DynamicGameEventListener<T extends GameEventListener> extends Object {
    constructor(listener: T)
    // private lastSection: SectionPos;
    readonly listener: T;
    add(level: ServerLevel): void;
    getListener(): T;
    move(level: ServerLevel): void;
    remove(level: ServerLevel): void;
}