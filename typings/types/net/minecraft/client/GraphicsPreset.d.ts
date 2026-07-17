import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class GraphicsPreset extends Enum<GraphicsPreset> implements StringRepresentable {
    static CODEC: Codec<GraphicsPreset>;
    static CUSTOM: GraphicsPreset;
    static FABULOUS: GraphicsPreset;
    static FANCY: GraphicsPreset;
    static FAST: GraphicsPreset;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GraphicsPreset;
    static values(): GraphicsPreset[];
    private constructor(serializedName: string, key: string)
    readonly key: string;
    readonly serializedName: string;
    apply(minecraft: Minecraft): void;
    getKey(): string;
    getSerializedName(): string;
    name(): "FAST" | "FANCY" | "FABULOUS" | "CUSTOM";
}