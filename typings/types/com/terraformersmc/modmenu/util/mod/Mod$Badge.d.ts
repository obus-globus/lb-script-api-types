import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class Mod$Badge extends Enum<Mod$Badge> {
    static CLIENT: Mod$Badge;
    static DEPRECATED: Mod$Badge;
    static LIBRARY: Mod$Badge;
    static MINECRAFT: Mod$Badge;
    static MODPACK: Mod$Badge;
    static PATCHWORK_FORGE: Mod$Badge;
    static convert(paramarg0: string[], paramarg1: string): Mod$Badge[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Mod$Badge;
    static values(): Mod$Badge[];
    private constructor(arg2: string, arg3: number, arg4: number, arg5: string)
    readonly fillColor: number;
    // private key: string;
    readonly outlineColor: number;
    readonly text: Component;
    getFillColor(): number;
    getOutlineColor(): number;
    getText(): Component;
    name(): "LIBRARY" | "CLIENT" | "DEPRECATED" | "PATCHWORK_FORGE" | "MODPACK" | "MINECRAFT";
}