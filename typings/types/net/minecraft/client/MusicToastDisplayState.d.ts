import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class MusicToastDisplayState extends Enum<MusicToastDisplayState> implements StringRepresentable {
    static CODEC: Codec<MusicToastDisplayState>;
    static NEVER: MusicToastDisplayState;
    static PAUSE: MusicToastDisplayState;
    static PAUSE_AND_TOAST: MusicToastDisplayState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MusicToastDisplayState;
    static values(): MusicToastDisplayState[];
    private constructor(name: string, translationKey: string)
    // private name: string;
    // private text: Component;
    // private tooltip: Component;
    getSerializedName(): string;
    renderInPauseScreen(): boolean;
    renderToast(): boolean;
    text(): Component;
    tooltip(): Component;
    name(): "NEVER" | "PAUSE" | "PAUSE_AND_TOAST";
}