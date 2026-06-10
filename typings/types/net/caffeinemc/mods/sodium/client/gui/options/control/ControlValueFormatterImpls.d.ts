import type { IntFunction } from '../../../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ControlValueFormatter } from '../../../../../../../../net/caffeinemc/mods/sodium/api/config/option/ControlValueFormatter.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ControlValueFormatterImpls extends Object {
    static anisotropyBit(): (param0: number) => Component;
    static biomeBlend(): (param0: number) => Component;
    static brightness(): (param0: number) => Component;
    static chunkFade(): (param0: number) => Component;
    static fpsLimit(): (param0: number) => Component;
    static guiScale(): (param0: number) => Component;
    static multiplier(): (param0: number) => Component;
    static number(): (param0: number) => Component;
    static percentage(): (param0: number) => Component;
    static quantityOrDisabled(paramarg0: (param0: number) => Component, paramarg1: Component): (param0: number) => Component;
    static resolution(): (param0: number) => Component;
    static translateVariable(paramarg0: string): (param0: number) => Component;
    private constructor()
}