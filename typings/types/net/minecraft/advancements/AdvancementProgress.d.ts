import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { AdvancementRequirements } from '../../../net/minecraft/advancements/AdvancementRequirements.d.ts'
import type { CriterionProgress } from '../../../net/minecraft/advancements/CriterionProgress.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class AdvancementProgress extends Object implements Comparable<AdvancementProgress> {
    static CODEC: Codec<AdvancementProgress>;
    static fromNetwork(paraminput: FriendlyByteBuf): AdvancementProgress;
    constructor()
    // private criteria: { [key: string]: CriterionProgress };
    // private requirements: AdvancementRequirements;
    compareTo(o: AdvancementProgress): number;
    // private countCompletedRequirements(): number;
    getCompletedCriteria(): string[];
    getCriterion(id: string): CriterionProgress;
    getFirstProgressDate(): Instant;
    getPercent(): number;
    getProgressText(): Component;
    getRemainingCriteria(): string[];
    grantProgress(name: string): boolean;
    hasProgress(): boolean;
    // private isCriterionDone(criterion: string): boolean;
    isDone(): boolean;
    revokeProgress(name: string): boolean;
    serializeToNetwork(output: FriendlyByteBuf): void;
    toString(): string;
    update(requirements: AdvancementRequirements): void;
}