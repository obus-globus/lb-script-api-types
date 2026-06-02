import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { WorldPreset } from '../../../../../../net/minecraft/world/level/levelgen/presets/WorldPreset.d.ts'
export class WorldCreationUiState$WorldTypeEntry extends Record {
    constructor(preset: Holder<WorldPreset>)
    // private preset: Holder<WorldPreset>;
    describePreset(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isAmplified(): boolean;
    preset(): Holder<WorldPreset>;
    toString(): string;
}