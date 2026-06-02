import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubtitleOverlay$SoundPlayedAt } from '../../../../../net/minecraft/client/gui/components/SubtitleOverlay$SoundPlayedAt.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SubtitleOverlay$Subtitle extends Object {
    constructor(text: Component, range: number, location: Vec3)
    // private playedAt: SubtitleOverlay$SoundPlayedAt[];
    // private range: number;
    readonly text: Component;
    getClosest(position: Vec3): SubtitleOverlay$SoundPlayedAt;
    getText(): Component;
    isAudibleFrom(camera: Vec3): boolean;
    isStillActive(): boolean;
    purgeOldInstances(maxAge: number): void;
    refresh(location: Vec3): void;
}