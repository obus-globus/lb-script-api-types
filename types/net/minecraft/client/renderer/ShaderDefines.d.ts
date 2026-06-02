import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderDefines$Builder } from '../../../../net/minecraft/client/renderer/ShaderDefines$Builder.d.ts'
export class ShaderDefines extends Record {
    static CODEC: Codec<ShaderDefines>;
    static EMPTY: ShaderDefines;
    static builder(): ShaderDefines$Builder;
    constructor(values: { [key: string]: string }, flags: string[])
    // private flags: string[];
    // private values: { [key: string]: string };
    asSourceDirectives(): string;
    equals(o: Object | null): boolean;
    flags(): string[];
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
    values(): { [key: string]: string };
    withOverrides(defines: ShaderDefines): ShaderDefines;
}