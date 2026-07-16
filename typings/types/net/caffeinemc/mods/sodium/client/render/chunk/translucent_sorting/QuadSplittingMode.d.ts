import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { TextProvider } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/TextProvider.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class QuadSplittingMode extends Enum<QuadSplittingMode> implements TextProvider {
    static OFF: QuadSplittingMode;
    static SAFE: QuadSplittingMode;
    static UNLIMITED: QuadSplittingMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): QuadSplittingMode;
    static values(): QuadSplittingMode[];
    private constructor(arg2: string, arg3: number, arg4: boolean, arg5: string)
    // private maxAmplificationFactor: number;
    // private name: Component;
    // private quantizeTriggerNormals: boolean;
    readonly shortName: string;
    allowsSplitting(): boolean;
    getLocalizedName(): Component;
    getMaxTotalQuads(arg0: number): number;
    getShortName(): string;
    quantizeTriggerNormals(): boolean;
    name(): "OFF" | "SAFE" | "UNLIMITED";
}