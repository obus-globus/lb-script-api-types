import type { IntFunction } from '../../../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ControlValueFormatter } from '../../../../../../../../net/caffeinemc/mods/sodium/api/config/option/ControlValueFormatter.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ControlValueFormatterImpls extends Object {
    static anisotropyBit(): (param0: number) => net.minecraft.network.chat.Component;
    static biomeBlend(): (param0: number) => net.minecraft.network.chat.Component;
    static brightness(): (param0: number) => net.minecraft.network.chat.Component;
    static chunkFade(): (param0: number) => net.minecraft.network.chat.Component;
    static fpsLimit(): (param0: number) => net.minecraft.network.chat.Component;
    static guiScale(): (param0: number) => net.minecraft.network.chat.Component;
    static multiplier(): (param0: number) => net.minecraft.network.chat.Component;
    static number(): (param0: number) => net.minecraft.network.chat.Component;
    static percentage(): (param0: number) => net.minecraft.network.chat.Component;
    static quantityOrDisabled(paramarg0: (param0: Component) => unknown, paramarg1: Component): (param0: number) => net.minecraft.network.chat.Component;
    static resolution(): (param0: number) => net.minecraft.network.chat.Component;
    static translateVariable(paramarg0: string): (param0: number) => net.minecraft.network.chat.Component;
    private constructor()
}